Please act as a backend developer proficient in nodejs and typescript.

I am making a link redirection service in nodejs using typescript and express. Here I will describe the requirements.

The goal of the service is to redirect short links (slugs) to specific amazon product pages. Each slug will be associated with more than one amazon page URL:

- One default URL for the US amazon store
- Multiple additional URLs for country or region specific amazon stores.

Here is the example format of the link:
https://example.com/:slug

All the slugs that are supported by our service will be hard-coded in a separate file called "link-definitions.ts".

When our service gets a request, it will try to find one of the link definitions based on the slug. If we have defined a link for that slug, we should find the country of that request based on the IP, and using one of the NPM packages that can do this mapping.

Once we have the country, we will inspect the link definition and if we have this country in the definition,  we will redirect the user to the link associated with that country.

In addition to the link definitions for each slug, we will have one fallback link definition that will be used in case we receive a request for a slug we don't recognize. This fallback link definition will have it's own mapping for each country and destination amazon URL.

In case that we do not have the amazon URL for a country, we should take the user to the URL for the US amazon store. All link definitions must have a link for amazon.

In addition to the country mapping each link definition will have one or more tags associated with it. Tags are represented as a list of strings.

Apart from redirecting the user, the goal of the service is to log every link click in a Postgres database. For each link click we want to save one record in a table with the following information:

- original slug in the request
- original country of the request
- tags of the found link definition
- resolved amazon URL
- videoId of the YouTube video that generated this link click

The videoId will be added to the clicked link by YouTube in the form of a query param called "v". For example, if one of our short links is used in a YouTube video description like this:

https://example.com/my-slug

Then YouTube will actually take the user to the following url:

https://example.com/my-slug?v=some-video-id

Our goal is to extract that videoId if present, and save it in the Postgres database.

The above are the basic requirements, please ask any clarifying questions before we get started with working on this project.

---

1. Please recommend a package, optimize for low memory usage
2. Assume I have a database, but I need to write the code to connect to it.
3. Let's call the table link_clicks, and based on the above requirements, please suggest the column names. Make sure to include a timestamp of each link click.
4. As far as error handling goes, in general if we receive a link click, even if we can't find the ideal URL for the given country or slug, we should always redirect the user to at least the fallback amazon page.

---

Before we continue what would be a good .gitignore file for this project?
