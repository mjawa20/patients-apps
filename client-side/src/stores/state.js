import { defineStore } from 'pinia'
import { api } from '../helpers/axios';
import { toast } from '../helpers/swal';

export const useStateStore = defineStore('state', {
  state: () => {
    return {
      patients: [],
      patient: {},
      loading: false,
    }
  },
  actions: {
    async handleDelete(id) {
      try {
        await api.get('/patientDelete/' + id)
        toast('success', `Successfully deleted patient`)
        this.fetchData()
      } catch (error) {
        toast('error', error.message)
      }
    },
    async fetchData() {
      this.loading = true
      try {
        const res = await api.get('/patients')
        this.patients = res.data.result
      } catch (error) {
        toast('error', error.message)
      } finally { setTimeout(() => this.loading = false, 800) }
    },
    async handleUpdateOrCreate(state, id) {
      this.loading = true
      try {
        const endpoint = id ? `/patientEdit/${id}` : '/patientAdd'
        const methods = id === '' ? 'put' : 'post'

        await api[methods](endpoint, state, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        toast('success', `Successfully ${id ? 'updated' : 'created'} patient`)
      } catch (error) {
        toast('error', error.message)
      } finally { this.loading = false }
    },
    async getDetail(id) {
      try {
        const res = await api.get(`/patient/${id}`)
        this.patient = res.data?.result
      } catch (error) {
        toast('error', error.message)
      }
    },
  }
})
