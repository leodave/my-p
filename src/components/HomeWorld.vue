<template>
  <v-container class="py-12">
    <!-- Hero Section -->
    <v-row align="center" justify="center" class="mb-12">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="250" class="elevation-12 mb-4">
          <v-img src="/Dawit_Elias_circle-optimised_circle.png"/>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8" class="text-center text-md-left">
        <h1 class="display-2 font-weight-bold primary--text mb-2">Dawit Elias Feleke</h1>
        <h2 class="headline font-weight-medium white--text mb-4">Software Engineer</h2>
        <p class="subtitle-1 white--text mb-6">
          5+ years of experience designing, developing and operating scalable, cloud-native backend systems.
          Specialised in Java, Spring Boot and distributed microservices.
        </p>
        <div class="d-flex flex-wrap justify-center justify-md-start">
          <v-btn large color="primary" class="mr-4 mb-2 black--text"
                 href="https://docs.google.com/document/d/1F_ssB0SWi2YlZUeJL-yEBA_8RZpsRFBA/edit?usp=sharing&ouid=113978681928025798327&rtpof=true&sd=true"
                 target="_blank">
            <v-icon left>mdi-file-document</v-icon>
            CV
          </v-btn>
          <v-btn large outlined color="primary" class="mr-4 mb-2" href="https://github.com/leodave" target="_blank">
            <v-icon left>mdi-github</v-icon>
            GitHub
          </v-btn>
          <v-btn large outlined color="primary" class="mr-4 mb-2" href="https://www.linkedin.com/in/dawit-elias/" target="_blank">
            <v-icon left>mdi-linkedin</v-icon>
            LinkedIn
          </v-btn>
          <v-btn large outlined color="primary" class="mb-2" href="https://global-pass-front-end-sigma.vercel.app/home" target="_blank">
            <v-icon left>mdi-launch</v-icon>
            Global Pass
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Professional Summary -->
    <v-row class="mb-12">
      <v-col cols="12">
        <v-card color="secondary" dark class="pa-6">
          <h3 class="headline primary--text mb-4">Professional Summary</h3>
          <p class="body-1 text-justify">
            Software Engineer with extensive experience in designing, developing and operating scalable, cloud-native backend systems for enterprise and
            high-traffic platforms. Specialised in Java, Spring Boot and distributed microservices, with experience delivering payment, fraud detection and
            gaming platforms supporting millions of users and high transaction volumes.
          </p>
          <p class="body-1 text-justify">
            Strong background in backend architecture, RESTful API design, asynchronous messaging, event-driven systems, database optimisation and cloud-native
            deployments using Kubernetes and GitOps practices.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Featured Projects -->
    <v-row class="mb-12">
      <v-col cols="12">
        <h3 class="headline primary--text mb-6 text-center">Featured Projects</h3>
      </v-col>
      <v-col cols="12">
        <v-card color="secondary" dark class="pa-6" hover>
          <v-card-title class="primary--text font-weight-bold px-0">
            <v-icon left color="primary">mdi-ping-pong</v-icon>
            League Pong (Personal Project)
          </v-card-title>
          <p class="body-1 text-justify">
            League Pong is a full-stack application built with <strong>Java Spring Boot</strong> and <strong>MySQL</strong> that allows users to book ping pong
            games throughout Barcelona.
            It features Google Maps integration to display locations where free ping pong tables exist in the city, enabling players to organize leagues and
            track rankings.
            <br>
            <v-btn small text color="primary"
                   href="https://github.com/leodave/Complete-Full-Stack-Website-Projects/tree/main/LeaguePong-App-For_Organizing-PingPong-Lagues"
                   target="_blank" class="px-0">
              <v-icon left small>mdi-github</v-icon>
              Git-hub repo
            </v-btn>
          </p>
          <v-chip-group>
            <v-chip small color="primary" outlined>Java Spring Boot</v-chip>
            <v-chip small color="primary" outlined>MySQL</v-chip>
            <v-chip small color="primary" outlined>Google Maps API</v-chip>
            <v-chip small color="primary" outlined>Vue.js</v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="secondary" dark class="pa-6" hover>
          <v-card-title class="primary--text font-weight-bold px-0">
            <v-icon left color="primary">mdi-map-marker</v-icon>
            Tourism Booking App (Personal Project)
          </v-card-title>
          <p class="body-1 text-justify">
            A <strong>NestJS</strong>, <strong>MongoDB</strong>, and <strong>Vue.js</strong> application that helps users book visits to tourism places.
            It allows users to mark favorites, manage bookings, and includes a comprehensive admin panel for CRUD operations on users and locations.
            <br>
            <v-btn small text color="primary"
                   href="https://github.com/leodave/Complete-Full-Stack-Website-Projects/tree/main/vuejs-nestTs-mongoDB-cinema-reservation" target="_blank"
                   class="px-0">
              <v-icon left small>mdi-github</v-icon>
              Git-hub repo
            </v-btn>
          </p>
          <v-chip-group>
            <v-chip small color="primary" outlined>NestJS</v-chip>
            <v-chip small color="primary" outlined>MongoDB</v-chip>
            <v-chip small color="primary" outlined>Vue.js</v-chip>
            <v-chip small color="primary" outlined>Admin Panel</v-chip>
          </v-chip-group>
        </v-card>
      </v-col>
    </v-row>

    <!-- Core Skills -->
    <v-row class="mb-12">
      <v-col cols="12">
        <h3 class="headline primary--text mb-6 text-center">Core Competencies</h3>
      </v-col>
      <v-col v-for="(skillGroup, index) in skillGroups" :key="index" cols="12" sm="6" md="4" class="mb-4">
        <v-card height="100%" color="secondary" dark hover>
          <v-card-title class="primary--text font-weight-bold">
            <v-icon left color="primary">{{ skillGroup.icon }}</v-icon>
            {{ skillGroup.title }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-chip v-for="skill in skillGroup.skills" :key="skill" small class="ma-1" color="primary" outlined>
              {{ skill }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeWorld',
  data() {
    return {
      skillGroups: [
        {
          title: 'Backend Engineering',
          icon: 'mdi-server',
          skills: ['Java 17/21', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'JWT', 'OAuth2'],
        },
        {
          title: 'Architecture',
          icon: 'mdi-pillar',
          skills: ['Microservices', 'Event-Driven', 'DDD', 'SOLID', 'Design Patterns', 'Scalability', 'Fault Tolerance'],
        },
        {
          title: 'Cloud & DevOps',
          icon: 'mdi-cloud',
          skills: ['Docker', 'Kubernetes', 'Helm', 'Argo CD', 'GitOps', 'Jenkins', 'CI/CD', 'Maven'],
        },
        {
          title: 'Databases',
          icon: 'mdi-database',
          skills: ['PostgreSQL', 'MySQL', 'Elasticsearch', 'JPA', 'Query Optimisation', 'Relational Modelling'],
        },
        {
          title: 'Testing & Messaging',
          icon: 'mdi-test-tube',
          skills: ['TDD', 'JUnit 5', 'Mockito', 'Cypress', 'RabbitMQ', 'Asynchronous Processing'],
        },
        {
          title: 'Frontend',
          icon: 'mdi-web',
          skills: ['React (Next)', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
        },
        {
          title: 'AI Engineering',
          icon: 'mdi-robot',
          skills: ['Claude', 'ChatGPT', 'Perplexity', 'Prompt Engineering', 'AI-assisted Development'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  transition: transform .2s;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
