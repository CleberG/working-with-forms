members = [
  {
    fname: 'John',
    lname: 'Lennon',
    instrument: 'Violão'
  },
  {
    fname: 'George',
    lname: 'Harrison',
    instrument: 'Guitarra'
  }
]

const handlingForms = {
  data() {
    return {
      members: window.members,
      newMember: {}
    }
  },
  methods: {
    addNewMembers: function () {
      if (
        this.newMember.fname &&
        this.newMember.lname &&
        this.newMember.instrument
      ) {
        console.log(
          members.findIndex(member => member.fname === this.newMember.fname)
        )
        if (
          members.findIndex(member => member.fname === this.newMember.fname) < 0 &&
          members.findIndex(member => member.lname === this.newMember.lname) < 0 && 
        ) {
          this.members.push(this.newMember)
          this.newMember = {}
        } else {
          alert('você não pode adicionar o mesmo membro mais de uma vez')
          this.newMember = {}
        }
      } else {
        alert('Você não pode adicionar com dados vazio')
      }
    }
  }
}

Vue.createApp(handlingForms).mount('#app')
