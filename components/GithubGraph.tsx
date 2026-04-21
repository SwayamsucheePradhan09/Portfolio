"use client"

import { GitHubCalendar } from "react-github-calendar"

export default function GithubGraph(){

return(

<section className="py-32 text-center">

<h2 className="text-4xl font-bold mb-16">
GitHub Activity
</h2>

<div className="flex justify-center">

<GitHubCalendar
username="SwayamsucheePradhan09"
blockSize={15}
blockMargin={5}
fontSize={16}
/>

</div>

</section>

)

}