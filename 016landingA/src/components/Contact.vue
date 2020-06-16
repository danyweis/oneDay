<template>
  <div class="heroBox contactBox">
    <div class="divider">
      <div class="contactInfo">
        <div class="contactImgLayer">
          <div class="address">
            <h2>Address</h2>
            <p>99, My Street</p>
            <p>My Town, PostCode</p>
          </div>
          <div class="phone">
            <h2>Phone Number</h2>
            <a href="tel:+3539998887777">+353-999-888-7777</a>
          </div>
          <div class="email">
            <h2>email</h2>
            <a href="mailto:">contact@yourmail.com</a>
          </div>
        </div>
      </div>
      <div class="contactForm">
        <form @submit.prevent>
          <h2>Send us a message</h2>
          <label for="fullName">Full Name:</label>
          <br />
          <input
            class="field smallField"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="First & Last name"
          />
          <br />
          <label for="email">Email</label>
          <br />
          <input
            class="field smallField"
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
          />
          <!-- <fieldset> -->
          <legend>Where did you from us?</legend>
          <!-- <p> -->
          <input type="radio" name="fromWhere" id="social" checked />
          <label for="social">Social Media</label>
          <br />
          <input type="radio" name="fromWhere" id="newsPaper" />
          <label for="newsPaper">News Paper</label>
          <br />
          <input type="radio" name="fromWhere" id="tv" />
          <label for="tv">TV</label>
          <br />
          <input type="radio" name="fromWhere" id="other" />
          <label for="other">Other...</label>
          <br />
          <!-- </p> -->
          <!-- <p> -->
          <label for="tellUs">If other tell us from where:</label>
          <br />
          <textarea class="field" name="tellUs" id="tellUs" cols="30" rows="10"></textarea>
          <br />
          <!-- </p> -->
          <!-- </fieldset> -->
          <button class="btn submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style>
</style>
