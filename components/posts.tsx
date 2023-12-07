import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./list-item"

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
                </ul>

            </div>
        </div>
    )
}