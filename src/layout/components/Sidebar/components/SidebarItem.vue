<template functional>
  <a-sub-menu
    :key="`${props.item.path}`"
  >
    <span slot="title">
      <a-icon :type="props.item.meta.icon" /><span> {{props.item.meta.title}}</span>
    </span>
    <template v-for="route in props.item.children">
      <a-menu-item
      :key="`${props.item.path}/${route.path}`"
      v-if="!route.hidden&&!route.alwaysShow"
      >
      <app-link :to="`${props.item.path}/${route.path}`">
        <span>{{ route.meta.title }}</span>
      </app-link>
      </a-menu-item>
      <sub-menu
        v-if="route.alwaysShow"
        :item="route"
      />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: {
    item:{
      type:Object,
      default:() => {
        return {}
      }
    },
    key:{
      type:String,
      default:''
    }
  },
  components:{
    AppLink:() => import('../components/Link'),
  }
};
</script>