const Footer = () => {
    return(
        <>
        <footer className="text-center bg-dark text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
                <span style={{color : "lightgreen"}} className="p-5"><b>GET OUR APP IN YOUR DEVICE :</b></span>
            </div>
            <div>
                <img src="./../google_play.png" height={50} width = {150}/>
                <img src="./../app_store.png" height={50} width = {150} className="p-1"/>
            </div>
            </section>
        </footer> 
        </>
    );
}

export default Footer;