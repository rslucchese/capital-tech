import React from 'react';



const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4"> Boilerplate: Ganhamos Varias Coisas "de Graça"</h2>

            <nav className="nav justify-content-center nav-pills flex-column flex-md-row">
                <a className="nav-link active" href="#es2015" data-toggle="tab">Ecma Script 6</a>
                <a className="nav-link" href="#unitTesting" data-toggle="tab">"Unit Tests"</a>
                <a className="nav-link" href="#others" data-toggle="tab">Outros</a>
            </nav>

            <div className="tab-content py-5">

                <div className="tab-pane active" id="es2015">
                    <h3>ES2015</h3>
                    <p>Usa Ecma Script 6 (uma versão bem nova de Javascript)</p>
                </div>

                <div className="tab-pane" id="unitTesting">
                    <h3>Tem "Unit Testing"</h3>
                    <ul>
                        <li>Jest</li>
                        <li>Enzyme</li>
                        <li>Nock</li>
                        <li>Expect assertion</li>
                        <li>Code coverage</li>
                    </ul>
                </div>

                <div className="tab-pane" id="others">
                    <h3>Outros</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Redux Form</li>
                        <li>Lodash</li>
                        <li>React Bootstrap Table</li>
                        <li>Font Awesome (for icons)</li>
                        <li>Hot Module Replacement (HMR)</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
