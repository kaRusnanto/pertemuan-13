import styled from "styled-components";

function Footer() {
    return (
        <Footerstyle>
            <div className="container">
                <footer className="footer">
                    <h2 className="footer__title">NONTON KUY</h2>
                    <p className="footer__author">MAKER@Rusnanto</p>
                </footer>
            </div>
        </Footerstyle>
    );
}

const Footerstyle = styled.div`
    .container {
    background-color: rgb(255, 247, 0);
    color: #000000;
    padding: 1rem;
    text-align: center;
}

.footer__title {
    margin-bottom: 1rem;
}

.footer__author {
    margin-bottom: 1rem;
}

@media (min-width: 768px) {}

@media (min-width: 992px) {}
`

export default Footer;