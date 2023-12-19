import wallpaper from './images/pexels-maxime-francis.jpg'
import bitcoinWhitepaper from './pdfs/bitcoin.pdf'

const domHandler = () => {
    console.log(wallpaper) // http://localhost:809008c81a7c75c74169.jpg
    console.log(bitcoinWhitepaper) // http://localhost:3000/61bcf4b2fd6061fb2100.pdf
    document.body.style.backgroundImage = `url(${wallpaper})` // sửa lại background-image của thẻ body
    const link = document.createElement('a') //tạo 1 thẻ a
    link.href = bitcoinWhitepaper // đường dẫn link localhost:3000/...
    link.textContent = 'Bitcoin Whitepaper'
    document.body.appendChild(link) // đặt làm thẻ con trong body
}

export default domHandler