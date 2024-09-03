import { MetadataRoute } from "next";

export default async function siteMap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: "https://bradydigitalconsulting.com/about"
        },
        {
            url: "https://bradydigitalconsulting.com/benefits"
        },
        {
            url: "https://bradydigitalconsulting.com/how-it-works"
        },
        {
            url: "https://bradydigitalconsulting.com/services"
        },
        {
            url: "https://bradydigitalconsulting.com"
        },
    ]
}