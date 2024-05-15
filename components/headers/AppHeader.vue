<template>
    <header>
        <nav>
            <ul>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
                <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
ul {
    display: flex;
    list-style: none;
    li {
        padding: 5px 10px;
        margin-left: 5px;
        a {
            text-decoration: none;
        }
    }
}
</style>
