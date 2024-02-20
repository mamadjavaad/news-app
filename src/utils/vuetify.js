import { createVuetify } from "vuetify";
import { VMain } from 'vuetify/components/VMain'
import { VCard,VCardActions,VCardItem,VCardSubtitle,VCardTitle } from 'vuetify/components/VCard'
import { VTextField } from 'vuetify/components/VTextField'
import { VIcon } from 'vuetify/components/VIcon'
import { VProgressLinear } from 'vuetify/components/VProgressLinear'
import { VProgressCircular } from 'vuetify/components/VProgressCircular'
import { VBtn } from 'vuetify/components/VBtn'
import { VLayout } from 'vuetify/components/VLayout'
import {VNavigationDrawer} from 'vuetify/components/VNavigationDrawer'
import {VList,VListItem,VListGroup,VListSubheader} from 'vuetify/components/VList'
import { VFooter } from 'vuetify/components/VFooter'
import { VResponsive  } from 'vuetify/components/VResponsive'
import {VBottomNavigation} from 'vuetify/components/VBottomNavigation'
import {VOverlay} from 'vuetify/components/VOverlay'
import {VImg} from 'vuetify/components/VImg'
import {VSpacer} from 'vuetify/components/VGrid'

const vuetify=createVuetify({
    components: {
        VMain,
        VCard,
        VCardActions,
        VCardItem,
        VCardTitle,
        VTextField,
        VCardSubtitle,
        VIcon,
        VProgressLinear,
        VProgressCircular,
        VBtn,
        VLayout,
        VNavigationDrawer,
        VList,
        VListGroup,
        VListItem,
        VListSubheader,
        VFooter,
        VResponsive,
        VBottomNavigation,
        VOverlay,
        VImg,
        VSpacer
      },})
export default vuetify;