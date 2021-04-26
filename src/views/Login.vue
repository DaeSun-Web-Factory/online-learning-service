<template>
  <div class="login">
    <div id="body_contatiner">
      <div id="body">

        <div id="login_container">
          <div class="Title">머선 ONLINE</div>
          <div class="Text_Field_Container"> <input class="Text_Field" type="text" placeholder="ID"> </div>
          <div class="Text_Field_Container"> <input class="Text_Field" type="text" placeholder="password"> </div>
          <div class="button_container" id="login_button_container"> <span depressed class="button" id="login_button"> LOGIN </span> </div>

          <br>
          <br>

          <div class="content">처음 오셨나요? <a href="/register/"> 회원가입 </a> </div>
        </div>

      </div>
    </div>
    
  </div>
</template>

<style>
@import '../assets/styles/login.css';
</style>

<script>

export default {
  name: 'Login',
  components: {
    //MainPage
  }
}
</script>
