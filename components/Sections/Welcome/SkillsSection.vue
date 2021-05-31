<template>
  <section id="skills-section" class="welcome-section">
    <SectionTitle
      :navName="$t('skills')"
      :title="$t('sections.skills.title')"
    />

    <div id="skills-section-text">
      <p class="welcome-section-text" v-html="$t('sections.skills.text')"></p>
    </div>

    <div id="skills">
      <div class="skill-progress" v-for="(skill, index) of skills" :key="index">
        <p class="skill-progress-name">{{ skill.name }}</p>
        <div class="skill-progress-bar-wrapper">
          <div
            :class="`skill-progress-bar-${skill.color}`"
            :style="{ width: skill.percentage + '%' }"
          >
            <span class="skill-progress-bar-percentage">
              {{ skill.percentage }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "../../Titles/SectionTitle";

export default {
  components: {
    SectionTitle,
  },

  computed: {
    skills() {
      return [
        { name: "HTML", percentage: 90, color: "blue" },
        { name: "CSS", percentage: 95, color: "red" },
        { name: "Javascript", percentage: 85, color: "purple" },
        { name: "Vue.js", percentage: 87, color: "yellow" },
        { name: "Node.js", percentage: 79, color: "aloe" },
        { name: "Express", percentage: 75, color: "darkblue" },
        { name: "PostgreSQL", percentage: 83, color: "black" },
        { name: "MySQL", percentage: 87, color: "pink" },
      ];
    },
  },
};
</script>
