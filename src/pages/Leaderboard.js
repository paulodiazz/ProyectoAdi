import styles from '../styles/leaderboard.module.css';
import React from 'react';

function Leaderboard() {

    return (
        <div>
            <div className={styles.container}>
                <p>Global Leaderboard</p>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Treasures captured</th>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>Hamza.lens</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>Anna.lens</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Paulo.lens</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Nick.lens</td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
                <a href="/#/hunt">
                    <button className={styles.button}>Back to the hunt!</button>
                </a>
            </div>
        </div>
    );
}

export default Leaderboard;
