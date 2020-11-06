export default () => `

<h1 class="form-header">Need Some Help Getting Started?</h1>

<div class="container">
  <div class="form">
    <div class="contact-info">
      <h3 class="title">Let's get in touch</h3>
      <p class="text">
        Need a little more help getting started? That's what we are here for you! Go ahead and send us your information with a short message explaining where you are, where you want to be, and any other goals you might have.
      </p>

      <div class="info">
        <img src="https://github.com/jdwhite1919/myCapstoneProject/blob/master/images/packfitness.jpg?raw=true" alt="packfitness" title="packfitness" class="packfitness" />
      </div>

          <div class="social-media">
            <p>Connect with the team :</p>
            <div class="social-icons">
              <a href="#">
              <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
              <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

    <div class="contact-form">

    <form action="https://formspree.io/f/mayljkno" method="POST">
        <h3 class="title">Contact us</h3>
        <div class="input-container">
          <input type="text" name="name" class="input" placeholder="Name" />
          <span>Username</span>
        </div>
        <div class="input-container">
          <input type="email" name="email" class="input" placeholder="Email"/>
          <span>Email</span>
        </div>
        <div class="input-container">
          <input type="tel" name="phone" class="input" placeholder="Phone"/>
          <span>Phone</span>
        </div>
        <div class="input-container textarea">
          <textarea name="message" class="input" placeholder="Message"></textarea>
          <span>Message</span>
        </div>
        <input type="submit" value="Send" class="btn" />
      </form>
    </div>
  </div>
</div>
`;
