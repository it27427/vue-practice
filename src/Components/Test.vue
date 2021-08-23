<template>
<div>
    <div>Hello {{ name }}</div>
    <button @click="changeName">Change Name</button>
    <div v-text="text"></div>
    <div v-html="htmlText"></div>
    <!-- BINDING -->
    <h2 :id="headingId">Heading</h2>
    <button :disabled="isDisabled">Bind</button>

    <!-- BINDING CLASS -->
    <h2 class="underline">Underline Text</h2>
    <h2 class="underline" :class="status">Status</h2>
    <h2 :class="isPromoted && 'promoted'">Promoted Movie</h2>
    <h2 :class="isSoldout ? 'sold-out' : 'new'">Soldout? Movie</h2>
    <!-- BINDING CLASSES USING ARRAY -->
    <h2 :class="['new', 'promoted']">Newly Promoted Movie</h2>
    <!-- BINDING CLASS INSIDE ARRAY USING TERNARY OPERATOR -->
    <h2 :class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">Array Conditional Movie</h2>
    <h2 :class="{
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">Object Conditional Movie</h2>

    <!-- BINDING INLINE STYLES -->
    <h2 :style="{
    color: highlightColor,
    // 'font-size': headingSize + 'rem'
    fontSize: headingSize + 'rem',
    padding: '1.25rem'
  }">Inline Style</h2>

    <!-- BINDING OBJECT INLINE STYLE -->
    <h2 :style="headingStyleObj">Style Object</h2>
    <!-- BINDING OBJECT STYLE INSIDE ARRAY -->
    <h2 :style="[headingStyleObj, baseStyleObject, successStyleObject]">Array Style Objects</h2>

    <!-- CONDITIONAL DIRECTIVES -->
    <h2 v-if="number === 0">The number is zero</h2>
    <h2 v-else-if="number < 0">The number is negative</h2>
    <h2 v-else-if="number > 0">The number is positive</h2>
    <h2 v-else>Not a number</h2>

    <!-- ONE CONDITION MANY ELEMENT -->
    <template>
        <h2>Vue</h2>
        <h2>React</h2>
        <h2>Angular</h2>
    </template>

    <!-- V SHOW DIRECTIVE -->
    <h2 v-show="showElement">Using V-show</h2>

    <!-- LIST RENDERING -->
    <!-- Array of Strings -->
    <ul v-for="(name, index) in names" :key="name">
        <li>{{ index + 1 }}. {{ name }}</li>
    </ul>

    <!-- Array of Objects -->
    <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>

    <!-- Array of Arrays -->
    <div v-for="actor in actors" :key="actor.name">
        <h2>{{ actor.name }}</h2>
        <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
    </div>

    <!-- Block of HTML elements -->
    <h4 v-for="(value, key, index) in myInfo" :key="value">
        {{index + 1}}. {{ key }}: {{ value }}
    </h4>

    <!-- Object key value pairs -->
    <template v-for="name in names" :key="name">
        <h2> {{ name }} </h2>
        <hr>
    </template>

    <!-- Conditional List Rendering -->
    <template v-for="name in namesArray" :key="name">
        <h2 v-if="name === 'John Doe'">
            {{ name }}
        </h2>
    </template>

    <h2>{{ 2+3+5 }}</h2>
    <h2>{{ 2+3+5*3 }}</h2>

    <h2>Add method - {{ add(2, 3, 5) }}</h2>
    <h2>Multiply method - {{ multiply(5) }}</h2>

    <h2>{{ num }}</h2>

    <div>
        <button @click="increment(1)">Increment</button>
        <button @click="decrement(1)">Decrement</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            name: 'Tushar',
            text: 'Learn Vue to master on Vue!',
            htmlText: '<p>Practice Vue to master on that...</p>',
            headingId: 'heading',
            isDisabled: true,
            status: 'danger',
            isPromoted: true,
            isSoldout: true,
            highlightColor: 'darkorange',
            headingSize: 3,
            headingStyleObj: {
                color: 'coral',
                fontSize: '3rem',
                padding: '1.25rem'
            },
            baseStyleObject: {
                fontWeight: 'italic',
                fontSize: '1.5rem'
            },
            successStyleObject: {
                background: 'forestgreen',
                color: 'lightgreen',
                border: 'solid 1px lightgreen',
                padding: '.75rem'
            },
            number: 10,
            display: true,
            showElement: false,
            names: ['Tushar', 'Nishi', 'Istiak'],
            fullNames: [{
                    first: 'Bruce',
                    last: 'Wayne'
                },
                {
                    first: 'John',
                    last: 'Snow'
                },
                {
                    first: 'Brad',
                    last: 'Lee'
                }
            ],
            actors: [{
                    name: 'Tom Cruise',
                    movies: ['Mission: Impossible', 'Jack Reacher']
                },
                {
                    name: 'Robert Downey, Jr',
                    movies: ['Iron Man', 'The Avengers']
                },
                {
                    name: 'Johnny Depp',
                    movies: ['Pirates of the Caribbean', 'The Professor']
                }
            ],
            myInfo: {
                name: 'Istiak Tushar',
                channel: 'Turnet',
                course: 'Vue'
            },
            namesArray: ['Tushar', 'Nishi', 'John Doe'],
            baseMultiplier: 5,
            num: 0
        }
    },
    methods: {
        add(a, b, c) {
            return a + b + c;
        },

        multiply(num) {
            return num * this.baseMultiplier;
        },

        increment(num) {
            this.num += num;
        },

        decrement(num) {
            this.num -= num;
        },

        changeName() {
            this.name = 'Iron Man'
        }
    }
}
</script>

<style lang="css" scoped>
    .underline {
    text-decoration: underline;
    }

    .promoted {
        font-style: italic;
    }

    .new {
        color: green;
    }

    .sold-out {
        color: red;
    }

    ul {
        padding-left: 0;
    }
</style>
