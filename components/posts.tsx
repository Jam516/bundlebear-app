import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./list-item"
import Link from "next/link"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">

                <h2 className="text-4xl font-bold dark:text-white/90">Research</h2>
                <ul >
                    {posts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                    <li className="mt-4 text-2xl dark:text-white/90">
                        <Link className="underline hover:text-black/70 dark:hover:text-white" href={`year-in-review/2023`}>{"2023 Year In Review"}</Link>
                        <br />
                        <p className="text-sm mt-1">{"December 26, 2023"}</p>
                    </li>
                </ul>

            </div>
        </div>
    )
}