---
outline: deep
prev: false
next: false
layout: page
---

<script setup>
import {VPTeamPage, VPTeamPageTitle, VPTeamMembers} from 'vitepress/theme'

const contributors = [
    {
        avatar: 'https://www.github.com/MilosPaunovic.png',
        name: 'Miloš Paunović',
        title: 'Creator',
        links: [
            { icon: 'github', link: 'https://github.com/MilosPaunovic' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/paunovicmilos' }
        ]
    }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Our Team
        </template>
        <template #lead>
            Below is the list of all contributors of the project.
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="contributors" />
</VPTeamPage>
