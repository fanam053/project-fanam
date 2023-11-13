<template>

      <div  >
          <ul >
            <li  v-for="item in data.usefullinks" :key="item.id" >
              <a><i class="fa fa-angle-left iran-sans"></i>{{ item.content }}</a>
            </li>
          </ul>
        </div>
  
</template>

<script setup>
 const {data}=await useFetch('/api/usefullinks')

</script>

<style>

</style>