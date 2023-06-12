<template>

<!-- BUTTON COMPONENT -->
<div class="component bg">
    <h2>Button Component</h2>
    <p>Button: A user interface component that allows users to trigger an action or submit information by clicking on it, typically displayed as a clickable element with text or an icon.</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <SKButton label="DEFAULT BUTTON" color="primary"></SKButton>
      </div>
      <div style="margin-right: 5px;">
        <SKButton label="PINK BUTTON 2" color="light"></SKButton>
      </div>
      <div style="margin-right: 5px;">
        <SKButton label="DARK PINK" color="dark"></SKButton>
      </div>
      <div style="margin-right: 5px;">
        <SKButton label="PINK BUTTON 1" color="pink1"></SKButton>
      </div>
      <div style="margin-right: 5px;">
        <SKButton label="PINK BUTTON 2" color="pink2"></SKButton>
      </div>
    </div>
  </div>
  <!--END OF BUTTON COMPONENT -->
  <br>
  <!-- -->

  <!---RADIO COMPONENTS-->
  <div class="component bg">
    <h2>Radio Component</h2>
    <p>Radio Component: A graphical user interface element that allows users to select a single option from a predefined set of mutually exclusive choices, typically displayed as a small circular button that can be selected or deselected.</p>
    <p>Selected option: {{ selectedOption }}</p>
    <div style="display: flex;">
      <div style="margin-right: 15px;">
        <SKRadioButton value="option1" name="radioGroup" label="Boochi" v-model="selectedOption" />
      </div>
      <div style="margin-right: 15px;">
        <SKRadioButton value="option2" name="radioGroup" label="Tofu" v-model="selectedOption" />
      </div>
      <div style="margin-right: 15px;">
        <SKRadioButton value="option3" name="radioGroup" label="Jiro" v-model="selectedOption" />
      </div>
    </div>
  </div>
<!--END OF RADIO COMPONENTS-->

<!--NUMBER INPUT COMPONENT-->
  <br>
  <div class="component bg">
    <h2>Number Input</h2>
    <p>Number input: An input field or control that specifically accepts numeric values from users, often used for capturing numerical data such as age, quantity, or measurements.</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <SKNumberinput :min="0" :max="100" :step="1" color="primary" />
      </div>
      <div style="margin-right: 5px;">
        <SKNumberinput :min="0" :max="100" :step="2" color="dark" />
      </div>
      <div style="margin-right: 5px;">
        <SKNumberinput :min="0" :max="100" :step="3" color="light" />
      </div>
      <div style="margin-right: 5px;">
        <SKNumberinput :min="0" :max="100" :step="4" color="pink1" />
      </div>
      <div style="margin-right: 5px;">
        <SKNumberinput :min="0" :max="100" :step="5" color="pink2" />
      </div>
    </div>
  </div>

  <!--END OF NUMBER INPUT COMPONENT-->

  <!--TEXT COMPONENT-->
  <br>
  <div class="component bg">
    <h2>Text Component</h2>
    <p>Text: A user interface element that allows users to view or enter textual information, such as titles, labels, descriptions, or user input, typically displayed as static text or an editable field.</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <SKText text="This is dark colored pink text!" color="pink1" fontSize="24px" />
      </div>
      <div style="margin-right: 5px;">
        <SKText text="This is light colored pink text!" color="pink2" />
      </div>
    </div>
  </div>

  <!--END TEXT COMPONENT-->

  <!--LIST COMPONENT-->
  <br>
  <div class="component bg">
    <h2>List Component</h2>
    <p>List: A graphical representation of data that organizes items in a vertical or horizontal manner, allowing users to view and interact with a collection of related information, typically displayed in rows or columns.
</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <SKList :items="listItems" />
      </div>
    </div>
  </div>

<!--END OF LIST COMPONENT-->

<!--LOADING COMPONENT-->
  <br>
  <div class="component bg">
    <h2>Function Loading Component</h2>
    <p>Function loading: A visual indication that is displayed to users while a specific function or process is in progress, providing feedback that the system is working and preventing users from taking further actions until the process is complete.
</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <div id="app">
          <SKLoading :loading="loading" />
        </div>
      </div>
    </div>
  </div>

  <!--END OF LOADING COMPONENT-->

  <!--PAGINATION COMPONENT-->

  <br>
  <div class="component bg">
    <h2>Pagination Component</h2>
    <p>Pagination: A user interface pattern used to divide a large set of data into multiple pages, allowing users to navigate through the data in a structured manner using previous and next page links or numbered page links.</p>
    <div style="display: flex;">
      <div style="margin-right: 5px;">
        <SKPage :current-page="currentPage" :total-pages="totalPages" @update:current-page="updateCurrentPage" />
      </div>
    </div>
  </div>

<!--END OF PAGNATION-->

<!--PROGRESS BAR COMPONENT-->
  <br>
  <div class="component bg">
    <h2>Progress Bar Component</h2>
    <p>Progressbar: A visual component that displays the progress or completion status of a task or process, typically represented as a horizontal bar that fills up gradually to indicate the amount of work done</p>
    <div style="display: flex;">
      <div style="margin-right: 50px;">
        <div style="width: 300px;">
          <SKProgress :progress="10" />
        </div>
      </div>
      <div style="margin-right: 5px;">
        <div style="width: 300px;">
          <SKProgress :progress="75" />
        </div>
      </div>
    </div>
  </div>
<!--END OF PROGRESS BAR-->

<!--SWITCH COMPONENT-->
  <br>
  <div class="component bg">
    <h2>Switch Component</h2>
    <p>Switch: A user interface component that enables users to toggle between two states, typically representing an "on" or "off" state, or to switch between different options or modes, often displayed as a sliding button or a toggle switch.
</p>
    
    <div style="display: flex;">
      <div style="margin-right: 50px;">
        <p>{{ switchStatus }}</p>
        <SKSwitch v-model="isSwitchOn" @change="handleSwitchChange" />
      </div>
      <div style="margin-right: 5px;">   
      </div>
    </div>
  </div>
<!--END OF SWITCH COMPONENT-->

<!--CHECKBOX COMPONENT-->

  <br>
  <div class="component bg">
    <h2>Checkbox Component</h2>
    <p>Checkbox: A graphical user interface element that enables users to select one or more options from a set of choices by marking or unmarking a small square box, indicating the presence or absence of a particular option.</p>
    <div style="display: flex;">
      <div style="margin-right: 50px;">
        <SKCheckbox v-model="isChecked" :value="true" :disabled="isDisabled" label="Checked"/>
      </div>
      <div style="margin-right: 50px;">
        <SKCheckbox v-model="isChecked" :value="false" :disabled="isDisabled" label="Unchecked"/>
      </div>
      <div style="margin-right: 50px;">
        <SKCheckbox v-model="isChecked" :disabled="true" label="Disabled"/>
      </div>
    </div>
  </div>

<!--END OF CHECKBOX COMPONENT-->

<!--DIALOG COMPONENT-->

  <br>
  <div class="component bg">
    <h2>Dialog Component</h2>
    <p>Dialog: A pop-up window or overlay that appears on the screen to display important information, prompt user input, or confirm an action, often used for displaying alerts, notifications, or requesting user input in a modal manner.</p>
    <div style="display: flex;">
      <div style="margin-right: 50px;">
        <div>
        <SKButton @click="openDialog">Open Dialog</SKButton>
        <SKDialog :title="dialogTitle" :visible="showDialog" @close="closeDialog">
          <p>2.75 cutieee joke!</p>
        </SKDialog>
        </div>
      </div>
      <div style="margin-right: 5px;">
      </div>
    </div>
  </div>
<!--END OF DIALOG COMPONENT-->

<!--TEXT FIELD COMPONENT-->
    <br>
    <div class="component bg">
    <h2>Text Field Component</h2>
    <p>Text Field: A user interface element that allows users to enter or provide data, such as text, numbers, or options, by typing or selecting information from predefined choices.</p>
    <div style="display: flex;">
      <div style="margin-right: 50px;">
        <div>
          <div>
            <SKInput name="username" label="Username" v-model="username" />
            <SKInput name="password" label="Password" type="password" v-model="password" />
          </div>
        </div>
      </div>
      <div style="margin-right: 5px;">
      </div>
    </div>
  </div>
  <!--END OF TEXT FIELD COMPONENT-->
</template>

<script>
import SKList from '../src/components/List/SKList.vue';
import SKFuncLoading from '../src/components/FuncLoading/SKFuncLoading.vue';
import SKProgress from '../src/components/Progress/SKProgress.vue';
import SKPage from '../src/components/Pagination/SKPage.vue';
import SKSwitch from '../src/components/Switch/SKSwitch.vue';
import SKCheckbox from '../src/components/Checkbox/SKCheckbox.vue';
import SKDialog from '../src/components/Dialog/SKDialog.vue';
import SKInput from '../src/components/Input/SKInput.vue';


export default {
  components: {
    SKList,
    SKFuncLoading,
    SKProgress,
    SKPage,
    SKSwitch,
    SKCheckbox,
    SKDialog,
    SKInput,
},
  data() {
    return {
      listItems: [
        { id: 1, label: '1. Item 1' },
        { id: 2, label: '2. Item 2' },
        { id: 3, label: '3. Item 3' },
      ],
      loading: true,
      currentPage: 1,
      totalPages: 3,
      isSwitchOn: false,
      isChecked: false,
      isDisabled: false,
      showDialog: false,
      dialogTitle: 'Dialog Title',
      username: '',
      password: '',
    };
  },
  computed: {
    switchStatus() {
      return this.isSwitchOn ? 'Switch is ON' : 'Switch is OFF';
    },
  },
  methods: {
    handleSwitchChange(isChecked) {
      this.isSwitchOn = isChecked;
    },
    handleCheckboxChange(checked) {
      console.log('Checkbox is now ' + (checked ? 'checked' : 'unchecked'));
    },
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
  }
}
</script>

<style>
body {
  font-family: "Comic Sans MS", sans-serif;
  background: linear-gradient(to right, #FADDE1, #FFC4D6, #FFA6C1, #FF5D8F, #e7acbf, #FF97B7, #FFACC5);
  font-size: large;
  color: black;
  margin: 0;
  display: block;
  padding-top: 50px;
}

.bg {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.explain {
  background-color: #de99d2;
  color: rgb(0, 0, 0);
  margin-top: 20px;
  padding: 10px;
}

p {
  font-size: medium;
  padding: 10px;
}

h2 {
  padding: 10px;
  padding-bottom: 10px;
}
.component {
  margin-bottom: 20px;
  padding: 30px;
  width: 1200px;
}
</style>
