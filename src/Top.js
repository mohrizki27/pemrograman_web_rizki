const Top = () =>{
    function handlePesan(){
        alert("halaman Top")
    }
    return(
        <a href="/" onClick={handlePesan}>Halaman Top</a>
    )
}
export default Top;