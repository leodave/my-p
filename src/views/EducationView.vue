<template>
  <v-container class="py-12">
    <h2 class="display-1 primary--text font-weight-bold mb-8 text-center">Education & Certifications</h2>

    <!-- Education Section -->
    <v-row class="mb-12">
      <v-col v-for="(edu, i) in education" :key="i" cols="12" md="6" class="mb-4">
        <v-card color="secondary" dark height="100%" hover>
          <v-card-title class="primary--text headline">
            <v-icon left color="primary">mdi-school</v-icon>
            {{ edu.institution }}
          </v-card-title>
          <v-card-subtitle class="white--text font-weight-bold pt-1">
            {{ edu.degree }}
            <div class="subtitle-2 opacity-70">{{ edu.location }}</div>
          </v-card-subtitle>
          <v-card-text>
            <ul class="white--text">
              <li v-for="(point, j) in edu.points" :key="j">{{ point }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Certifications Section -->
    <h3 class="headline primary--text mb-6 text-center">Professional Certifications</h3>
    <v-row>
      <v-col v-for="(cert, i) in certifications" :key="i" cols="12" sm="6" md="4" lg="3">
        <v-card color="secondary" dark height="100%" hover :href="cert.link" target="_blank" class="d-flex flex-column">
          <v-card-title class="subtitle-1 font-weight-bold primary--text word-break-normal">
            {{ cert.title }}
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn text color="primary">
              <v-icon left>mdi-file-pdf-box</v-icon>
              View Certificate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EducationView',
  data() {
    return {
      education: [
        {
          institution: 'Epitech - European Institution of Technology',
          degree: 'Full-Stack Web & Mobile Development Bootcamp',
          location: 'Barcelona, Spain',
          points: [
            'Object Oriented Programming',
            'Data Structure And Algorithms',
            'Mobile Application Development',
            'Full-Stack web development (MERN, NestJS, Vue)',
          ],
        },
        {
          institution: 'UoPeople University',
          degree: 'B.Sc. in Computer Science',
          location: 'Online (American Accredited)',
          points: [
            'Enrolled in degree program while working full-time',
            'Focusing on advanced academic foundations and engineering quality',
          ],
        },
        {
          institution: 'Fundación Esplai',
          degree: 'Intensive Java Developer Bootcamp',
          location: 'Barcelona, Spain',
          points: [
            'Advanced Java development & Spring Boot',
            'Agile methodologies and teamwork',
          ],
        },
      ],
      certifications: [
        {
          title: 'Microservices Development',
          link: 'https://drive.google.com/file/d/1_YiLBwh534sCpHcRrIY_gspwmiT5KPSS/view',
        },
        {
          title: 'Web & Mobile Development (Epitech)',
          link: 'https://drive.google.com/file/d/1QOeAQgYJRTA868pjChZYfgtabg7SSO1v/view',
        },
        {
          title: 'Java Developer (Fundacio Esplai)',
          link: 'https://drive.google.com/file/d/1r3ev3p5KhU4WDWbnJ7Cw1pwqfb9u2PjC/view',
        },
        {
          title: 'QT/QML [C++] Certification',
          link: 'https://drive.google.com/file/d/1WscoaUd3mA01_sjUGzbd9KSgeD6sQnG6/view',
        },
        {
          title: 'Agile Certification',
          link: 'https://drive.google.com/file/d/192loRcX836JAPZs-qM5WTfhudKud3v4S/view',
        },
        {
          title: 'ITIL Certification',
          link: 'https://drive.google.com/file/d/1eewMdRm-ltL-c0_KktvKm9H4IEhhMBBi/view',
        },
      ],
    };
  },
};
</script>

<style scoped>
.word-break-normal {
  word-break: normal;
}

.opacity-70 {
  opacity: 0.7;
}
</style>
