<script lang="ts">
    import svelteLogo from "$lib/images/logos/svelte.webp";
    import javaspringLogo from "$lib/images/logos/java_spring.webp";
    import Pill from "$lib/components/pill.svelte";
    import CalendarIcon from "$lib/icons/calendar-icon.svelte";
    import UsersIcon from "$lib/icons/users-icon.svelte";
    import homeImage from "$lib/images/projects/internship/home.webp";
    import challengeImage from "$lib/images/projects/internship/challenge.webp";
    import createChallengeImage from "$lib/images/projects/internship/create_challenge.webp";
    import profileImage from "$lib/images/projects/internship/profile.webp";
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";

    // type ComponentProps = {

    // }
</script>

<div
    class="container flex flex-col lg:flex-row lg:mt-36 gap-16 mx-auto px-5 mt-10"
>
    <div class="min-w-96 flex flex-col justify-between">
        <div class="space-y-3">
            <h2 class="text-accent text-5xl font-black">Internship</h2>
            <div class="flex gap-4">
                <Pill>
                    <UsersIcon class="w-4" />
                    <p>team (2)</p>
                </Pill>
                <Pill>
                    <CalendarIcon class="w-4" />
                    <p>Jan 2024 - May 2024</p>
                </Pill>
            </div>
            <p class="text-justify">
                so this contains some more information about the internship.
                Where it was etc.
            </p>
        </div>

        <a
            href="#intro"
            class="hidden lg:flex rounded-full justify-center items-center border border-primary-muted/30 py-4 border-dashed hover:bg-accent hover:text-background transition-colors"
            >Read more below</a
        >
    </div>
    <div class="space-y-5">
        <div class="flex gap-16 px-10 lg:py-5 py-2">
            <div class="flex gap-4 items-center">
                <img src={svelteLogo} alt="Logo" width="20" height="20" />
                <p class="text-primary-muted/70 font-bold">SvelteKit</p>
            </div>
            <div class="flex gap-4 items-center">
                <img src={javaspringLogo} alt="Logo" width="22" height="20" />
                <p class="text-primary-muted/70 font-bold">Java Spring Boot</p>
            </div>
        </div>
        <div
            class="bg-primary-muted/15 rounded-3xl px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4"
        >
            <img src={homeImage} alt="home" class="rounded-xl" title="home" />
            <img
                src={challengeImage}
                alt="challenge"
                class="rounded-xl"
                title="challenge details"
            />
            <img
                src={createChallengeImage}
                alt="create challenge"
                class="rounded-xl"
                title="creating a new challenge"
            />
            <img
                src={profileImage}
                alt="profile"
                class="rounded-xl"
                title="profile"
            />
        </div>
    </div>
</div>

<article
    id="intro"
    class="container flex flex-col lg:flex-row px-8 lg:px-20 mx-auto relative gap-4"
>
    <div class="space-y-12 lg:pt-32 order-2 lg:order-1">
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                What was asked of us?
            </h3>
            <p class="mt-3">
                Elision provided us with a very blank and simple statement: "We
                want a web application where our employees can challenge each
                other in order to promomte some friendly competition". At first
                we were taken aback because of how empty the problem statement
                was. That was it. We had to come up with the way things had to
                work, the content of the application and a good-looking design
                (to the best of our ability). The one other required thing was
                integration with Strava, so people could log their activities
                without having to open the application.
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                How did we kick off?
            </h3>
            <p class="mt-3">
                After we got the problem statement and got to know our mentor a
                bit better, we started brainstorming some ideas. We had many,
                but not all were great. In order to find out where our focus
                should be we made a MOSCOW. Elision also asked us to document
                everything from our MOSCOW to why we used certain technologies
                in Confluence.
            </p>
            <p class="mt-2">
                We also designed a schema for our database, which helped us in
                further thinking about some of our features. After most of the
                documenting was done we started looking online for some designs.
                Much like thinking out the database model, designig helped us
                think about features deeper. So to conclude, during the first ~2
                weeks of the internship we were documenting our planning, chosen
                technologies, datamodel, design, etc.
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">How did we work?</h3>
            <p class="mt-3">
                After the research phase of 2 weeks we started developing. Both
                of us acted as full-stack developers during the project so we
                could work on features without having to wait on each other.
                This also allowed both of us to have knowledge of both the
                backend and frontend. As you may have seen at the top of the
                page, our frontend was written in SvelteKit and our backend in
                Java with Spring Boot.
            </p>
            <p class="mt-2">
                During the internship we worked in sprints of 2 weeks. We had
                standups every weekday and sprint demos at the end of each
                sprint cycle. During this meeting 2 employees of Elision would
                be present (our mentor + 1) and they would give us feedback,
                sometimes steering us in a whole new direction. Our mentor is a
                backend Java developer at Elision. He and some other employees
                reviewed our backend code and suggested improvements if needed.
                We also reviewed each other's code, though i gave more
                improvements than i got since the other internee wasn't from
                Application Development.
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                What was my role in all of this?
            </h3>
            <p class="mt-3">
                From the start it was clear that i had the most technical
                knowledge when it came to frontend and backend development.
                Because of this i took more of a "lead" role in the team, even
                though there wasnt really a leader. When it comes the
                application itself, i created the following functionalities:
            </p>
            <ul class="list-disc ml-5">
                <li>OAuth login w/ Strava</li>
                <li>Create challenge + create template</li>
                <li>Challenge detail page</li>
                <li>Challenge search page</li>
                <li>
                    Application design reworks (auth, profile, challenge,
                    create)
                </li>
                <li>CI/CD pipelines + Azure hosting</li>
            </ul>
            <p class="mt-2">
                So basically i created the basis for most of the things in the
                project so my teammate could easily build his stuff. On top of
                doing full-stack development i also did the design for the
                application.
            </p>
        </section>

        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">What did i learn?</h3>
            <p class="mt-3">
                During the internship i primarily learned how to behave and code
                in a professional environment. I learned how and why we should
                use sprints and worked with Jira to plan our sprints. Coding
                wise i learned to keep testing in mind when designing the code
                architecture.
            </p>
        </section>
    </div>

    <aside
        class="lg:sticky lg:top-0 order-1 lg:order-2 lg:pt-32 mt-10 mb-5 flex flex-col self-start mx-auto gap-2"
    >
        <div class="bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">Company</h4>
            <p>Elision, Hasselt</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">Team composition</h4>
            <p>Me - Full Stack Developer / Designer</p>
            <p>x - Full Stack Developer</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">Project Link</h4>
            <a
                href="https://elicomp.vercel.app"
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span>Click to open</span>
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">Resources</h4>
            <p>Files</p>
        </div>
    </aside>
</article>
