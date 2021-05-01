<template>
  <div class="login">
    <div id="body_white_contatiner" class="register_container">
    
      <div id="login_container">
        <div class="Title">회원가입</div>

        <div id="body_register">
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="아이디" v-model="id"> 
            <span class="register_button"> 중복확인 </span>
          </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="비밀번호" v-model="password"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="비밀번호 확인" v-model="password_confirmation"> </div>
          <div class="content">* 비밀번호는 8자리 이상이어야 합니다.</div>
          <br>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="이름" v-model="name"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="이메일" v-model="email"> </div>
          <div class="Text_Field_Underline_Container"> <input class="Text_Field_underline" type="text" placeholder="학번/교번" v-model="number"> </div>
          <div class="Text_Field_Underline_Container"> 

            <input type="radio" class="register_radio" name="check_SP" value="0" v-model="role"> 학생
            <input type="radio" class="register_radio" name="check_SP" value="1" v-model="role"> 교수

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
  data: () => {
    return{
      id: "",
      password: "",
      password_confirmation: "",
      name: "",
      email: "",
      number: "",
      role: "",

      id_duplication_check: false,
    }
  },
  methods: {
    checkIDDuplication(){
      
    }

  },
  mounted: function () {
    this.checkIDDuplication();
  }
}
</script>
