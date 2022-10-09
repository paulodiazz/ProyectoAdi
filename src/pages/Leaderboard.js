import styles from '../styles/leaderboard.module.css';
import React from 'react';
import "../assets/styles/style.css"

function Leaderboard() {

    return (
        <div class="container no-padding">
            <img src={require("../assets/images/UI/FondoLeaderboard.png").default} alt="Background" />
            <div className='w-100' style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }} >
                <div className='row w-50 mx-auto py-5'>
                    <img src={require("../assets/images/UI/GlobalLeaderBoard.png").default} />
                </div>
                <div className='row mx-auto' style={{width: "90%"}}>
                    {/* Columns titles */}
                    <div className='col-2'>
                        <h5 className='text-center'>Rank</h5>
                    </div>
                    <div className='col-4'>
                        <h5 className='text-center'>User</h5>
                    </div>
                    <div className='col-6'>
                        <h5 className='text-center'>Treasures Captured</h5>
                    </div>
                    {/* User rows need function to iterate over response */}
                    <div className='col-2'>
                        <p className='text-center'>#1</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center'>Hamza.lens</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-center'>34</p>
                    </div>
                    {/* ------------------------------------- */}
                    <div className='col-2'>
                        <p className='text-center'>#2</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center'>Anna.lens</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-center'>31</p>
                    </div>
                    {/* ------------------------------------- */}
                    <div className='col-2'>
                        <p className='text-center'>#3</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center'>Paulo.lens</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-center'>23</p>
                    </div>
                    {/* ------------------------------------- */}
                    <div className='col-2'>
                        <p className='text-center'>#4</p>
                    </div>
                    <div className='col-4'>
                        <p className='text-center'>Nick.lens</p>
                    </div>
                    <div className='col-6'>
                        <p className='text-center'>22</p>
                    </div>
                </div>
                <div className="w-50 mx-auto">
                    <a href="/#/hunt"  >
                        <img src={require("../assets/images/UI/BackHunt.png").default} alt="Back to hunt" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Leaderboard;
