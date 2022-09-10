
function Footer(){
    const date = new Date()
    const customDate = date.getFullYear()

    return ( 
        <div className="footer">
            <p>Copyright ⓒ {customDate}</p>
        </div>
    )
}

export default Footer;