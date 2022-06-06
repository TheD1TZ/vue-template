import Daw from '../views/Daw.vue'
import Vst from '../views/Vst.vue'
import SamplePack from '../views/SamplePack.vue'

export const routes = [
  {path: '/', redirect: '/vst'},
  {path: '/daw', component: Daw, meta: {title: 'Daw'}},
  {path: '/vst', component: Vst, meta: {title: 'Vst'}},
  {path: '/samplepacks', component: SamplePack, meta: {title: 'SamplePacks'}},
]
