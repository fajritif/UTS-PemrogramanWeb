import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Riwayat from '../views/Riwayat.vue'
import Logout from '../views/Logout.vue'
import BerandaDosen from '../views/BerandaDosen.vue'
import DaftarMahasiswa from '../views/DaftarMahasiswa.vue'
import RiwayatDosenMahasiswa from '../views/RiwayatDosenMahasiswa.vue'
import LogoutDosenMahasiswa from '../views/LogoutDosenMahasiswa.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Beranda
        },
        {
            path: '/Beranda',
            component: Beranda
        },
        {
            path: '/Riwayat',
            component: Riwayat
        },
        {
            path: '/Logout',
            component: Logout
        },
        {
            path: '/BerandaDosen',
            component: BerandaDosen
        },
        {
            path: '/DaftarMahasiswa',
            component: DaftarMahasiswa
        },
        {
            path: '/RiwayatDosenMahasiswa',
            component: RiwayatDosenMahasiswa
        },
        {
            path: '/LogoutDosenMahasiswa',
            component: LogoutDosenMahasiswa
        },
        {
            path: '/setoran',
            component: () => import('../views/Setoran.vue')
        },
    ],
})

export default router
