<template>
  <div class="headline">
    <h2>Pairing Made Easy</h2>
    <p>Manage pair rotations like a pro! Pairing Combo is the open source project that aims to help those developers that work using pair programming organise their rotation like no other tool.</p>
  </div>
  <div class="reasons">
    <div>
      <div class="box">
        <img src="../assets/blocks-icon.png" width="80px"/>
      </div>
      <div class="card">
        <h3>Easy To Use</h3>
        <p>Just set up your workspace settings to fit your team and you are good to go! Pairing Combo will take care of the rest.</p>
      </div>
    </div>
    <div>
      <div class="box">
        <img src="../assets/clock-icon.png" width="80px"/>
      </div>
      <div class="card">
        <h3>Save Time</h3>
        <p>No more wasting time discussing about pair rotations, with Pairing Combo you can focus on what matters.</p>
      </div>
    </div>
    <div>
      <div class="box">
        <img src="../assets/code-icon.png" width="80px"/>
      </div>
      <div class="card">
        <h3>Built For Developers</h3>
        <p>Build quality software and enhance collaboration with a well organised pair programming schedule.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .headline {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 0 3vw 2vw;
    h2 {
      text-align: left;
      font-size: 35px;
      margin-top: 0;
    }
    p {
      text-align: left;
      line-height: 2em;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 1vw;
      border-radius: 0.5em;
      width: 94.5%;
    }
  }

  .reasons {
    display: flex;
    width: 100%;
    gap: 4vw;
    div {
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 1.5vw;
        margin-bottom: 10px;
        z-index: 2;
      }
    }

    .box {
      width: 100px;
      height: 100px;
      border-radius: 0.5em;
      background-color: rgb(94, 59, 145);
      border: 3px solid rgb(0, 0, 0);
      display: flex;
      justify-content: center;
    }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: absolute;
      top: 130%;
      z-index: -1;
      background-color: rgba(0,0,0, 0.7);
      padding: 20px;
      height: 250px;
      width: 20%;
      border-radius: 0.5em;
    }
  }
</style>