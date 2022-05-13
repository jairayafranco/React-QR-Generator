import QrCode from 'qrcode'
import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const GenerateQr = (e) => {
    e.preventDefault()
    
    if(!/http|.com/.test(url)) {
      return alert('Invalid URL')
    }

    QrCode.toDataURL(url, { width: 800, margin: 2 }, (err, url) => {
      if (err) return alert(err)
      setQrCode(url)
    })
  }

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <form onSubmit={GenerateQr}>
        <input
          type="text"
          placeholder="htttp://www.yoururl.com"
          defaultValue={url}
          onChange={(e) => setUrl(e.target.value)}
          autoFocus
        />
        <button type="submit">Generate</button>
      </form>
      {qrCode && <>
        <img src={qrCode} alt="qrCode" />
        <a href={qrCode} download="qrcode.png">Download</a>
      </>}
    </div>
  )
}

export default App
