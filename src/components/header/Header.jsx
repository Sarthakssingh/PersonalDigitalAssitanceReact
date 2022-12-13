import React from 'react';
import './Header.css';

function header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
            <div class="container-fluid">
                <a class="navbar-brand logo">S.S</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <div class="ms-auto">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="#">Follow Us</a>
                    </li>
                    {/* <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
                </div>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default header