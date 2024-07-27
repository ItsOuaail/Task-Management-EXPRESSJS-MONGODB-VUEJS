<template>
    <div class="section">
        <div class="card bg-neutral text-neutral-content w-96">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Confirm your registration!</h2>
              <p>Please check your email to confirm your registration, if you confirm it go to the login page. </p>
              <div class="card-actions justify-end">
                <a href="/signup"><button class="btn1 btn btn-primary">Login →</button> </a>
                
              </div>
            </div>
          </div>
    </div>
</template>
<style scoped>
.section {
    padding-top: 15%;
    padding-bottom: 18%;
    padding-left: 35%;
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

  .btn1 {
    background: rgb(173,173,150);
background: -moz-radial-gradient(circle, rgba(173,173,150,0.7315738795518207) 0%, rgba(120,120,7,1) 110%);
background: -webkit-radial-gradient(circle, rgba(173,173,150,0.7315738795518207) 0%, rgba(120,120,7,1) 110%);
background: radial-gradient(circle, rgba(173,173,150,0.7315738795518207) 0%, rgba(120,120,7,1) 110%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#adad96",endColorstr="#787807",GradientType=1);
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