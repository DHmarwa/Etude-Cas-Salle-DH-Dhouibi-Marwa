import Viewsalles from "./components/salles/Viewsalles.vue";
import Addsalles from "./components/salles/Addsalles.vue";
import editsalles from "./components/salles/editsalles.vue";

import Viewpieces from "./components/pieces/Viewpieces.vue";
import Addpiece from "./components/pieces/Addpiece.vue";
import Editpiece from "./components/pieces/Editpiece.vue";

import Viewspectacles from "./components/spectacles/Viewspectacles.vue";
import Addspectacles from "./components/spectacles/Addspectacles.vue";
import Editspectacle from "./components/spectacles/Editspectacle.vue";

export const routes = [
  {
    name: "Viewsalles",
    path: "/viewsalles",
    component: Viewsalles
  },
  {
    name: "Addsalles",
    path: "/addsalles",
    component: Addsalles
  },
  {
    name: "editsalles",
    path: "/editsalles/:id",
    component: editsalles
  },
  {
    name: "Viewpieces",
    path: "/viewpieces",
    component: Viewpieces
  },
  {
    name: "Addpiece",
    path: "/addpieces",
    component: Addpiece
  },
  {
    name: "Editpiece",
    path: "/editpiece/:id",
    component: Editpiece
  },
  {
    name: "Viewspectacles",
    path: "/viewspectacles",
    component: Viewspectacles
  },
  {
    name: "Addspectacles",
    path: "/addspectacles",
    component: Addspectacles
  },
  {
    name: "Editspectacle",
    path: "/editspectacle/:id",
    component: Editspectacle
  }
];

