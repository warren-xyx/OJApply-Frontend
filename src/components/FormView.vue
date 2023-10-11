<template>
  <v-sheet width="60%" class="mx-auto">
    <v-form fast-fail class="my-6" @submit.prevent>
      <v-text-field v-model="Gender" label="Gender"></v-text-field>
      <v-text-field v-model="Name" label="Name"></v-text-field>
      <v-text-field v-model="Student_id" label="Student ID"></v-text-field>
      <v-text-field v-model="Birthdate" label="Birth Date" placeholder="0000-00-00"></v-text-field>
      <v-text-field v-model="Political_status" label="Political status"></v-text-field>
      <v-text-field v-model="Ethnicity" label="Ethnicity"></v-text-field>
      <v-text-field v-model="Major_class" label="Major"></v-text-field>
      <v-text-field v-model="Previous_position" label="Previous Position"></v-text-field>
      <v-text-field v-model="Special_skills" label="Special Skills"></v-text-field>
      <v-textarea v-model="Self_introduction" label="Self Introduction"></v-textarea>
      <v-text-field v-model="Job_expectation" label="Job Expectation"></v-text-field>
      <!-- <v-text-field v-model="Profile_photo" label="Profile_photo"></v-text-field> -->
      <v-text-field v-model="Phone_number" label="Phone Number"></v-text-field>
      <v-text-field v-model="Attachment" label="Attachment"></v-text-field>
      <v-btn type="submit" block class="mt-2" @click="apply">Apply</v-btn>
      <v-btn type="submit" block class="mt-2" @click="update">Update</v-btn>

    </v-form>
  </v-sheet>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    User_id: 1,
    Gender: true,
    Name: '',
    Student_id: '',
    Birthdate: '',
    Political_status: '',
    Ethnicity: '',
    Major_class: '',
    Previous_position: '',
    Special_skills: '',
    Self_introduction: '',
    Job_expectation: '',
    Profile_photo: '',
    Phone_number: '',
    Attachment: ''
  }),
  methods: {
    apply() {
      const formData = {
        user_id: this.User_id,
        gender: this.Gender,
        name: this.Name,
        student_id: this.Student_id,
        birthdate: this.Birthdate,
        political_status: this.Political_status,
        ethnicity: this.Ethnicity,
        major_class: this.Major_class,
        previous_position: this.Previous_position,
        special_skills: this.Special_skills,
        self_introduction: this.Self_introduction,
        job_expectation: this.Job_expectation,
        profile_photo: this.Profile_photo,
        phone_number: this.Phone_number,
        attachment: this.Attachment
      };

      console.log(formData);
      axios.post('http://localhost:8848/form', formData)
        .then(response => {
          // Handle the response
          console.log(response.data);
          alert('Apply success!');
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    }
  }
}
</script>
