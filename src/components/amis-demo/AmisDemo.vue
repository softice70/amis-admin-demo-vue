<template>
    <AMisRenderer :schema="schema" />
</template>

<script>
import AMisRenderer from "@/components/amis/AMisRenderer.vue";
export default {
    name: "AmisDemo",
    components: {
        AMisRenderer
    },
    data() {
        return {
            schema: {
                type: 'app',
                brandName: 'Admin',
                logo: '/logo.png',
                header: {
                    type: 'tpl',
                    inline: false,
                    className: 'w-full',
                    tpl:
                        '<div class="flex justify-between"><div>顶部区域左侧</div><div>顶部区域右侧</div></div>'
                },
                api: '/pages/site.json'
            }
        };
    }
};
</script>
