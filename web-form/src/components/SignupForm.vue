<template>
  <form>
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />

    <label>Species:</label>
    <select v-model="species">
      <option value="android">Android</option>
      <option value="angel">Angel</option>
      <option value="human">Human</option>
      <option value="demon">Demon</option>
      <option value="dragon">Dragon</option>
      <option value="majin">Majin</option>
      <option value="namekian">Namekian</option>
      <option value="saiyan">Saiyan</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>

    <div>
      <label>Mentors:</label>
      <br />
      <input type="checkbox" value="roshi" v-model="mentors" />
      <label>Roshi</label>
      <br />
      <input type="checkbox" value="picolo" v-model="mentors" />
      <label>Picolo</label>
      <br />
      <input type="checkbox" value="kami" v-model="mentors" />
      <label>Kami</label>
    </div>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      
      >
      <span @click="removeSkill(skill)">
          {{ skill }}
      </span>
    </div>
  </form>

  <p v-if="email">Email: {{ email }}</p>
  <p v-if="password">Passowrd: {{ password }}</p>
  <p v-if="species">Role: {{ species }}</p>
  <p v-if="terms">Terms Accepted: {{ terms }}</p>
  <p v-if="mentors.length > 0">
    Mentors: {{ mentors }} <span v-if="mentors.length == 3">👴👽👽</span>
  </p>
  <p v-if="skills.length > 0">Skills: {{ skills }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      species: "",
      terms: false,
      mentors: [],
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
          this.tempSkill = this.tempSkill.replace(",", "");
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }

        this.tempSkill = "";
      }
    },
    removeSkill(skill) {
      /* for (let i = -1; i < this.skills.length; i++) {
        if (this.skills[i] == e) {
          this.skills.splice(i,1);
          break;
        }
      } */
      this.skills = this.skills.filter((item) => item != skill )
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>
