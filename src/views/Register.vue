<template>
  <div class="login">
    <div id="body_white_contatiner" class="register_container">
    
      <div id="login_container">
        <div class="Title">회원가입</div>

        <div id="body_register">
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="아이디"> 
            <span class="register_button"> 중복확인 </span>
          </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="비밀번호"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="비밀번호 확인"> </div>
          <div class="content">* 비밀번호는 8자리 이상이어야 합니다.</div>
          <br>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="이름"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="이메일"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="학번/교번"> </div>
          <div class="Text_Field_Underline_Container"> 

            <input type="radio" class="register_radio" name="check_SP" value="학생"> 학생
            <input type="radio" class="register_radio" name="check_SP" value="교수"> 교수

          </div>
        </div>
      <br>
      <div class="button_container" id="login_button_container"> <a href="/login/" class="non_underline_link"> <span depressed class="button" id="login_button">  회원가입 </span> </a> </div>
      </div>
    </div>
    
  </div>
</template>

<style>
@import '../assets/styles/register.css';
</style>

<script>

export default {
  name: 'Login',
  components: {
    //MainPage
  }
}
</script>
