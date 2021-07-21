<template>
  <section class="welcome-section" id="contacts-section">
    <SectionTitle :navName="$t('getInTouch')" :title="$t('contacts')" />

    <div id="contacts-wrapper">
      <div id="contacts-info">
        <div class="contacts-info-item" id="contacts-info-email">
          <div class="contacts-info-icon">
            <fa-icon :icon="['fas', 'at']" />
          </div>
          <a href="mailto:selimdev00@gmail.com">selimdev00@gmail.com</a>
        </div>
        <div class="contacts-info-item" id="contacts-info-location">
          <div class="contacts-info-icon">
            <fa-icon :icon="['fas', 'street-view']" />
          </div>
          <p>Turkmenistan, Ashgabat</p>
        </div>
        <div class="contacts-info-item" id="contacts-info-phone-number">
          <div class="contacts-info-icon">
            <fa-icon :icon="['fas', 'phone']" />
          </div>
          <a href="tel:+99362928043">+993 62 92 80 43</a>
        </div>
      </div>
      <!-- THIS SECTION WILL BE OPENED AFTER I GET A SERVER FOR RECIEVING LETTERS -->
      <!--      <form id="contacts-form">-->
      <!--        <input-->
      <!--          type="text"-->
      <!--          :placeholder="$t('name')"-->
      <!--          v-model="letter.senderName"-->
      <!--        />-->
      <!--        <input-->
      <!--          type="text"-->
      <!--          :placeholder="$t('email')"-->
      <!--          v-model="letter.senderEmail"-->
      <!--        />-->
      <!--        <input-->
      <!--          type="text"-->
      <!--          :placeholder="$t('subject')"-->
      <!--          v-model="letter.subject"-->
      <!--        />-->
      <!--        <textarea-->
      <!--          :placeholder="$t('message')"-->
      <!--          v-model="letter.message"-->
      <!--        ></textarea>-->
      <!--        <button>{{ $t("sendMessage") }}</button>-->
      <!--      </form>-->
    </div>
  </section>
</template>

<script>
import SectionTitle from "../../Titles/SectionTitle";
export default {
  components: {
    SectionTitle,
  },

  data() {
    return {
      letter: {
        senderName: "",
        senderEmail: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>
