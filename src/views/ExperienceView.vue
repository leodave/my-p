<template>
  <v-container class="py-12">
    <h2 class="display-1 primary--text font-weight-bold mb-8 text-center">Professional Experience</h2>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
          v-for="(job, i) in experience"
          :key="i"
          color="primary"
          fill-dot
          large
      >
        <template v-slot:opposite>
          <span class="headline font-weight-bold white--text" v-text="job.period"></span>
        </template>
        <v-card color="secondary" dark class="elevation-4">
          <v-card-title class="headline primary--text">
            {{ job.role }}
            <v-spacer></v-spacer>
            <span class="subtitle-2 white--text hidden-md-and-up">{{ job.period }}</span>
          </v-card-title>
          <v-card-subtitle class="white--text font-weight-bold pt-1">
            <a :href="job.link" target="_blank" class="primary--text text-decoration-none">{{ job.company }}</a>
            <v-btn x-small text color="primary" :href="job.link" target="_blank" class="ml-1 px-1">visit</v-btn>
            - {{ job.location }}
          </v-card-subtitle>
          <v-card-text class="white--text">
            <ul class="mt-2">
              <li v-for="(point, j) in job.points" :key="j" class="mb-2">{{ point }}</li>
            </ul>
            <div class="mt-4">
              <strong>Technologies:</strong>
              <v-chip v-for="tech in job.tech" :key="tech" x-small class="ma-1" color="primary" outlined>
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <h2 class="display-1 primary--text font-weight-bold mt-16 mb-8 text-center">Featured Projects</h2>
    <v-row>
      <v-col v-for="(project, i) in projects" :key="i" cols="12" md="6">
        <v-card color="secondary" dark height="100%" hover>
          <v-img :src="project.image" height="250px"></v-img>
          <v-card-title class="primary--text headline">{{ project.title }}</v-card-title>
          <v-card-text>
            <p class="white--text">{{ project.description }}</p>
            <v-btn v-if="project.repo" small text color="primary" :href="project.repo" target="_blank" class="px-0 mb-2">
              <v-icon left small>mdi-github</v-icon>
              Git-hub repo
            </v-btn>
            <div class="mt-2">
              <v-chip v-for="tag in project.tags" :key="tag" x-small class="ma-1" color="accent" outlined>
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ExperienceView',
  data() {
    return {
      experience: [
        {
          role: 'Software Engineer',
          company: 'TWS (The Workshop)',
          location: 'Madrid, Spain',
          period: 'Present',
          link: 'https://theworkshop.com/',
          points: [
            'Designed and delivered backend services for a high-traffic online gaming platform supporting 10M+ users.',
            'Implemented a configurable custom messaging rule engine, increasing engagement by 10%.',
            'Led architectural decomposition of a monolithic fraud detection platform into microservices.',
            'Migrated operational reporting data from Elasticsearch to PostgreSQL, reducing query latency by 35%.',
            'Migrated 12+ services from Bamboo to Argo CD and Kubernetes using Helm charts.',
            'Developed React in-game Deposit bar processing 15K+ daily transactions.',
          ],
          tech: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Elasticsearch', 'RabbitMQ', 'Kubernetes', 'Argo CD', 'React', 'Prometheus', 'Grafana', 'Splunk'],
        },
        {
          role: 'Junior Software Engineer',
          company: 'IGT (International Gaming Technologies)',
          location: 'Barcelona, Spain',
          period: 'Past',
          link: 'https://www.igt.com/',
          points: [
            'Developed high-profile international lottery projects (Toto-Lotto, EuroMillions) serving 2M+ weekly users.',
            'Maintained platforms handling 500K+ daily transactions with complex bug fixes and feature enhancements.',
            'Participated in analysis, design, and business logic implementation using Java.',
            'Developed UI components using Swing.',
          ],
          tech: ['Java', 'Swing', 'Spring', 'Oracle DB', 'Agile'],
        },
        {
          role: 'Software Engineer',
          company: 'Ferchau Engineering',
          location: 'Barcelona, Spain',
          period: 'Past',
          link: 'https://www.ferchau.com/es/en',
          points: [
            'Developed multiple desktop applications using C++ and QT/QML framework.',
            'Integrated C++ with JavaScript, SQL, and Python for complex application logic.',
            'Collaborated in an Agile environment following ITIL standards.',
          ],
          tech: ['C++', 'QT/QML', 'JavaScript', 'Python', 'SQL'],
        },
      ],
      projects: [
        {
          title: 'League Pong',
          description: 'Full-stack application built with Java Spring Boot and MySQL that allows users to book ping pong games throughout Barcelona. Features Google Maps integration for free ping pong table locations and player rankings.',
          repo: 'https://github.com/leodave/Complete-Full-Stack-Website-Projects/tree/main/LeaguePong-App-For_Organizing-PingPong-Lagues',
          image: 'https://raw.githubusercontent.com/leodave/Profile-Pics/main/mapleaguepong.png',
          tags: ['Java', 'Spring Boot', 'MySQL', 'Vue.js', 'Google Maps API'],
        },
        {
          title: 'Tourism Booking App',
          description: 'A NestJS, MongoDB, and Vue.js application to book visits to tourism places. Includes favorite marking, booking management, and an admin panel for CRUD operations.',
          repo: 'https://github.com/leodave/Complete-Full-Stack-Website-Projects/tree/main/vuejs-nestTs-mongoDB-cinema-reservation',
          image: 'https://raw.githubusercontent.com/leodave/Profile-Pics/main/touristgidehomepage.png',
          tags: ['Vue.js', 'NestJS', 'MongoDB', 'Admin Panel'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-decoration-none {
  text-decoration: none;
}
</style>
