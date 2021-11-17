import logo from './logo.svg';
import './App.css';
import AkitaInuSmall from './images/Akita-Inu.webp';
import AkitaLogo from "./images/akitalogo.webp";
import AkitaInuMain from "./images/Akita-INU-Token.webp";
import AlgorandWalletMain from "./images/algorand-wallet-01.webp";
import AlgoDark from "./images/algo-dark.webp";
import NFT1 from "./images/nft1.webp";
import NFT2 from "./images/nft2.webp";
import NFT3 from "./images/nft3.webp";
import NFT4 from "./images/nft4.webp";
import NFT5 from "./images/nft5.webp";
import NFT6 from "./images/nft6.webp";
import NFT7 from "./images/nft7.webp";
import NFT8 from "./images/nft8.webp";

function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={AkitaLogo} alt="" width="60" /> Akita Inu ASA
                </a>
                <button class="navbar-toggler rounded-4 shadow-sm border-light border purpleGradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#ecosystem">Ecosystem</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#timeline">Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#nfts">NFTs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#community">Community</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#charity">Charity</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832">Purchase</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <a href="https://tinychart.org/asset/384303832" class="btn rounded-pill btn-success" id="price">Loading...</a>
                        <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832" class="btn btn-dark purpleGradient rounded-pill mx-auto ms-lg-2 d-block d-lg-inline mt-2 mb-4 m-md-0"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="d-inline-block" width="18">
                            <path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" class=""></path>
                        </svg> Swap on TinyMan</a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="py-5 purpleGradient text-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-5 offset-md-1">
                        <div class="px-4 px-md-0">
                            <h2 class="mb-4">AKITA INU TOKEN is the premier decentralized community ASA on the Algorand Blockchain.</h2>
                            <p clas="mb-4">1 Billion AKITA were created on inception. More details of how AKITA is distributed can be found below.</p>
                            <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832" class="btn btn-light btn-lg rounded-pill"><img src={AkitaInuSmall} class="img-fluid" width="40" /> &nbsp;&nbsp; Buy Akita Inu now&nbsp;&nbsp;</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <img src={AkitaInuMain} class="img-fluid d-block mx-auto" />
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 border-top border-dark bg-dark text-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-5 offset-md-1">
                        <img src={AlgorandWalletMain} class="img-fluid d-block mx-auto" width="350" />
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="px-4">
                            <h2 class="mb-4">Why Algorand</h2>
                            <p>Send money to anyone, anywhere, anytime with transaction finality under 4.5 seconds.</p>
                            <p>Transaction fees are a fraction of a cent or 0.001 Algo.</p>
                            <p>Algo was built for billions of users, so payments won’t slow down no matter how much traffic there is.</p>
                            <p>Algo doesn’t fork and uses the most advanced cryptography around. This protects any ASAs or NFTs from being copied.</p>
                            <p class="mb-4">Like AKITA the total supply of Algo was created at the launch of the Algorand blockchain. Anyone can see how many Algo, or AKITA are in use.</p>
                            <a href="https://www.algorand.com" target="_blank" class="btn btn-dark btn-lg purpleGradient rounded-pill"><img src={AlgoDark} class="img-fluid" width="40" /> &nbsp;&nbsp; Learn more &nbsp;&nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 border-top" id="ecosystem">
            <div class="container">
                <h2 class="mb-5 text-center"><span class="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Ecosystem</span></h2>
                <div class="row row-eq-height text-white">
                    <div class="col-12 col-md-5 offset-md-1">
                        <div class="bg-dark p-4 rounded-4">
                            <h4>AKITA INU TOKEN<br /><small class="text-white-50">ASA ID#384303832</small></h4>
                            <ul>
                                <li>1 Billion AKITA INU Created</li>
                                <li>350,000,000 Added to Tinyman Liquidity Pool (35%)</li>
                                <li>250,000,000 AKITA Airdropped through request on Oct 31st, 2021 (25%)</li>
                                <li>50,000,000 AKITA reserved for the creator with a Minimum 1 year lock up period (5%)</li>
                                <li>200,000,000 AKITA reserved for the AKITA community project (20%)</li>
                                <li>150,000,000 AKITA reserved for future Airdrops and Community Awareness (15%)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="bg-dark p-4 rounded-4 mt-4 mt-md-0">
                            <h4>Official AKITA NFT<br /><small class="text-white-50">ASA ID#388950186</small></h4>
                            <ul>
                                <li>We Created 10,000 AKITA LOGO NFTs for Airdrops! These LOGO NFTs are perfect avatars to help spread awareness!</li>
                                <li>10,000 AKITA NFTs Created</li>
                                <li>10,000 AKITA NFTs for Airdrops (100%)</li>
                            </ul>
                        </div>
                        <div class="text-center mt-4">
                            <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832" class="btn btn-outline-dark btn-lg rounded-pill"><img src={AkitaInuSmall} class="img-fluid" width="40" /> &nbsp;&nbsp; Buy Akita Inu now&nbsp;&nbsp;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="purpleGradient py-6 text-white position-relative" id="timeline">
            <h2 class="mb-5 text-center"><span class="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Timeline</span></h2>
            <div class="container small-width">
                <div class="row text-white-50">
                    <div class="col-8 col-md-6 pb-5">
                        <div class="rounded-3 bg-dark p-4 done">
                            <h4 class="semi-bold">AKITA INU Created</h4>
                            1 Billion AKITA INU TOKEN ASA were created
                        </div>
                    </div>
                    <div class="col border-left-dotted">
                        <div class="p-2 d-inline-block bg-light text-dark rounded text-start">
                            26<sup>th</sup> Oct<br /><strong>2021</strong>
                        </div>
                    </div>
                </div>
                <div class="row text-white-50">
                    <div class="col text-end">
                        <div class="p-2 d-inline-block bg-light text-dark rounded text-start">
                            29<sup>th</sup> Oct<br /><strong>2021</strong>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 pb-5 border-left-dotted">
                        <div class="rounded-3 bg-dark p-4 done">
                            <h4 class="semi-bold">LOGO and NFT Created</h4>
                            The official logo and 10,000 logo NFTs were created
                        </div>
                    </div>
                </div>
                <div class="row text-white-50">

                    <div class="col-8 col-md-6 pb-5">
                        <div class="rounded-3 bg-dark p-4 done">
                            <h4 class="semi-bold">Free Air Drop</h4>
                            Fill out the google form by 16:00 PST for a free Airdrop! ENDED
                        </div>
                    </div>
                    <div class="col border-left-dotted">
                        <div class="p-2 d-inline-block bg-light text-dark rounded text-start">
                            29<sup>th</sup> Oct<br /><strong>2021</strong>
                        </div>
                    </div>
                </div>
                <div class="row text-white-50">
                    <div class="col text-end">
                        <div class="p-2 d-inline-block bg-light text-dark rounded text-start">
                            12<sup>th</sup> Nov<br /><strong>2021</strong>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 pb-5 border-left-dotted">
                        <div class="rounded-3 bg-dark p-4 done">
                            <h4 class="semi-bold">Site Launch</h4>
                            Our Site is live with community project details!
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8 col-md-6 pb-5">
                        <div class="rounded-3 bg-dark p-4">
                            <h4 class="semi-bold">Final Air Drop!</h4>
                            Check out out twitter and sign up to the final free AirDrop!
                        </div>
                    </div>
                    <div class="col border-left-dotted last">
                        <div class="p-2 d-inline-block bg-light text-dark rounded text-start">
                            13<sup>th</sup> Nov<br /><strong>2021</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-dark position-relative" id="nfts">
            <div class="position-absolute mt-5 top-0 start-50 translate-middle-x rounded-pill bg-white border p-4 h2 mb-0 shadow text-dark">NFT's</div>
            <div class="row g-0">
                <div class="col-3">
                    <img src={NFT1} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT2} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT3} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT4} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT5} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT6} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT7} class="img-fluid" />
                </div>
                <div class="col-3">
                    <img src={NFT8} class="img-fluid" />
                </div>
            </div>
        </div>
        <div class="bg-dark py-6 text-white" id="community">
            <div class="container small-width">
                <div class="px-4">
                    <h2 class="mb-5 text-center"><span class="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Community</span></h2>
                    <h2 class="mb-4">Monthly AKITA NFT Collab</h2>
                    <p>There are 2 things we love almost as much as dogs. The Algo Community and NFTs! Our first community project will be a Monthly NFT Project! Each month community members can submit an NFT they created for review. We will choose 1 winner each month. The Selected artist each month will receive 1,000,000 AKITA, 10 Algo and be spotlighted on our Site and Social Media! Additionally, a 1 of 1 NFT will be created and sold to the highest bidder. All proceeds will go to the Artist!</p>
                    <p class="mb-4">To Enter: Send your Drawings to akitacommunityproject@gmail.com We will contact the winner directly through the email you submit. Winners will be announced on the last Sunday of each month. The first winner will be announced on November 28th.</p>
                    <h4 class="m-0">Additional Community Projects Coming Soon!</h4>
                    <div class="text-center mt-5">
                        <a href="https://reddit.com/r/AkitaInuASA/" class="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i class="fab fa-reddit-alien"></i> Reddit</a>
                        <a href="https://twitter.com/AkitaInuASA" class="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                        <a href="https://discord.gg/SmMuHws8nT" class="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i class="fab fa-discord"></i> Discord</a>
                        <a href="https://www.instagram.com/akitainutoken/" class="my-3 btn btn-dark purpleGradient rounded-pill btn-lg px-4 mx-2" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6" id="charity">
            <div class="container">
                <h2 class="mb-5 text-center"><span class="mx-auto d-inline-block rounded-pill bg-white border p-4 mb-0 shadow text-dark">Charity</span></h2>
            </div>
        </div>
        <div class="py-6 border-top">
            <div class="container text-center">
                <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=384303832" target="_blank" class="btn btn-dark btn-sm mx-2">Swap on TinyMan</a> <a href="#" target="_blank" class="btn btn-dark btn-sm mx-2">Algorand Foundation</a><br />
                <p class="pt-5 mb-0">&copy; 2021 Akita Inu ASA</p>
            </div>
        </div>
    </div>
  );
}

export default App;
