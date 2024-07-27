<template>
  <div class="section">
    <div class="row">
      <div class="content">
        <h4>
          Welcome to <br />
          Task Manager
        </h4>
        <p>
          Your Ultimate Solution for Staying Organized and Productive.
          <br />Task Manager simplifies daily tasks, tracks projects and
          deadlines, and improves team collaboration. Perfect for boosting
          productivity.
        </p>
        <a href="/signup"><button class="btn1 btn">Get Started</button></a>
      </div>
      <div class="image">
        <img class="image1" src="/public/img/Work time-amico (3).png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.section {
  padding-top: 4%;
  padding-left: 4%;
  background: rgb(121, 121, 120);
  background: -moz-radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(121, 121, 120, 1) 0%,
    rgba(155, 155, 124, 1) 41%,
    rgba(255, 255, 187, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#797978",endColorstr="#ffffbb",GradientType=1);
}
.row {
  display: flex;
  align-items: center;
  flex-wrap: reverse;
  gap: 1.5rem;
}

.row .content {
  flex: 1 1 40rem;
  text-align: center;
}

.row .image {
  flex: 1 1 40rem;  
}

.row .image .image1 {
  width: 90%;
  margin-left: 10%;
}

.row .content h4 {
  margin-bottom: 1rem;
  font-size: 4.5rem;
  color: #2e2e2e;
  line-height: 1;
  text-align: left;
  font-family: "Times New Roman", Times, serif;
  font-weight: 900;
}

.row .content p {
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #585858;
  line-height: 1.3;
  text-align: left;
}

.btn1 {
  margin-right: 82%;
  background-color: #3d3c3c;
  border: #585858;
  border-radius: 1rem;
  width: 8rem;
  color: #eff0e8;
  transition: 0.7s ease;
}
.btn1:hover {
  background: rgb(155, 155, 124);
  background: -moz-linear-gradient(
    301deg,
    rgba(155, 155, 124, 0.99781162464986) 0%,
    rgba(22, 22, 1, 1) 110%
  );
  background: -webkit-linear-gradient(
    301deg,
    rgba(155, 155, 124, 0.99781162464986) 0%,
    rgba(22, 22, 1, 1) 110%
  );
  background: linear-gradient(
    301deg,
    rgba(155, 155, 124, 0.99781162464986) 0%,
    rgba(22, 22, 1, 1) 110%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9b9b7c",endColorstr="#161601",GradientType=1);
  transform: scale(1.01);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>