<template>
    <div class="contacto_view">
        <Banner/>
        <Form_contacto/>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Form_contacto from '@/components/Contacto/Form_contacto.vue';

export default {
    name: 'contacto_view',

    components:{
        Banner,
        Form_contacto
    }
}
</script>