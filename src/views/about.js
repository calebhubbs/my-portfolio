/*
 *   Copyright (c) 2024
 *   All rights reserved.
 */

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// To add your photos, drop them in src/images/about/ and uncomment the imports below.
// Recommended sizes: 600-800px wide for singles, 400-600px for side-by-side pairs.
//
import childhood from '../images/about/childhood.jpg';
import basketball1 from '../images/about/basketball1.jpg';
import basketball2 from '../images/about/basketball2.jpg';
import sanDiego from '../images/about/san-diego.jpg';
import youversion from '../images/about/Image003.jpg';
import running1 from '../images/about/running1.jpg';
// import family2 from '../images/about/family2.jpg';
import manInArena from '../images/about/man-n-arena.webp';
import outdoors from '../images/about/outdoors.jpg';

function PhotoSingle({ src, alt, caption }) {
  if (!src) {
    return (
      <div className="my-10 rounded-lg bg-neutral-800 border border-neutral-700 h-64 md:h-80 flex items-center justify-center">
        <span className="text-neutral-500 text-sm">{alt || 'Photo coming soon'}</span>
      </div>
    );
  }
  return (
    <figure className="my-10">
      <img
        src={src}
        alt={alt}
        className="rounded-lg w-full object-cover max-h-[28rem]"
      />
      {caption && (
        <figcaption className="text-neutral-500 text-sm mt-2">{caption}</figcaption>
      )}
    </figure>
  );
}

function PhotoPair({ left, right }) {
  const renderSlot = (photo) => {
    if (!photo.src) {
      return (
        <div className="rounded-lg bg-neutral-800 border border-neutral-700 h-56 md:h-64 flex items-center justify-center">
          <span className="text-neutral-500 text-sm">{photo.alt || 'Photo coming soon'}</span>
        </div>
      );
    }
    return (
      <figure>
        <img
          src={photo.src}
          alt={photo.alt}
          className="rounded-lg w-full h-56 md:h-64 object-cover"
        />
        {photo.caption && (
          <figcaption className="text-neutral-500 text-sm mt-2">{photo.caption}</figcaption>
        )}
      </figure>
    );
  };

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {renderSlot(left)}
      {renderSlot(right)}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 md:py-24 px-4">
      <Helmet>
        <title>My Life So Far - Caleb Hubbs</title>
        <meta name="description" content="From college basketball to coding bootcamp to tech lead at YouVersion. The story of how showing up became the whole game." />
      </Helmet>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8">
        <Link to="/" className="hover:text-neutral-300 transition-colors">
          Caleb Hubbs
        </Link>
      </h1>

      <div className="space-y-5 text-neutral-300 leading-relaxed text-base md:text-lg">
        <h2 className="text-2xl font-bold text-neutral-100">My Life So Far</h2>

        <p>
          I've spent most of my life learning that showing up is the whole
          game.
        </p>

        <p>
          I grew up in a loving household with my older brother Jake, who is
          married to my wonderful sister-in-law, Katie, and they have three boys. Getting to be an uncle is one of the most
          fun and meaningful parts of my life. As a kid, I loved video games,
          technology, and being outside, whether that meant being on a baseball
          field or a basketball court. I could never sit still long enough to
          watch movies, so I've had to do a lot of catching up there over the
          years.
        </p>

        <PhotoPair
          left={{ src: childhood, alt: "Growing up", caption: "The Hubbs family" }}
          right={{ src: null, alt: "Family photo", caption: "" }} 
        />

        <p>
          Sports shaped a lot of my early life, especially basketball. It taught
          me discipline, competitiveness, and how to keep going when things got
          hard. For a long time, that was a huge part of how I understood myself.
        </p>

        <p>
          Then, at the start of my junior year of college, I made the biggest
          decision of my life up to that point: I quit college basketball.
        </p>

        <PhotoPair
          left={{ src: basketball1, alt: "Cutting down the nets", caption: "Cutting down the nets" }}
          right={{ src: basketball2, alt: "2018 Great American Conference Champions", caption: "2018 Great American Conference Champions" }}
        />

        <p>
          Not long after that, I spent a semester studying in San Diego. That
          season changed me in a lot of ways. It reminded me that there is a lot
          to life, and that you actually have to live it. It also became a
          turning point in my faith. I heard a quote during that time that deeply
          changed the way I related to God:
        </p>

        <blockquote className="border-l-2 border-neutral-600 pl-4 md:pl-6 italic text-neutral-400 text-base my-6">
          "There are two truths about you. A truth about who you are, what you
          have done, and where you have been. And a higher truth of God that
          says, 'I know that truth. I want you to be open with that truth to me,
          and walk in freedom, and find out you are son, daughter, prince,
          princess. I want you to walk daily in that truth.'"
        </blockquote>

        <p>
          That changed something in me. It gave me a deeper understanding of
          grace, freedom, identity, and what it means to be fully known by God
          and still fully loved by Him.
        </p>

        <PhotoSingle
          src={sanDiego}
          alt="A semester in San Diego"
          caption="A semester in San Diego that changed everything"
        />

        <p>
          I ended up graduating from Southern Nazarene with a bachelor's degree
          in business, and into COVID. Around that time, I kept coming back to
          something that had interested me for years: technology. I had always
          been curious about how applications were built, so I decided to attend
          a coding bootcamp. That decision ended up changing the direction of my
          life.
        </p>

        <p>
          From there, I landed at YouVersion, where I've now spent the last
          several years growing as an engineer and leader. I've had the chance to
          work on products used by millions of people every day, and one of the
          parts of my work I care most about is helping others grow. Mentoring,
          leading, and helping people reach their potential has become one of the
          most meaningful parts of my career.
        </p>

        <PhotoSingle
          src={youversion}
          alt="YouVersion team"
          caption="The YouVersion team"
        />

        <p>
          My life verse is Matthew 25:35-36, my favorite Psalm is Psalm 27, and one of
          my favorite quotes is <em>The Man in the Arena</em>. Each of them has shaped
          the way I want to live and who I want to become: someone marked by faith,
          courage, compassion, and a willingness to keep showing up.
        </p>

        {/* PHOTO: Man in the Arena quote - drop image in src/images/about/man-in-arena.jpg and uncomment the import */}
        <PhotoSingle
          src={manInArena}
          alt="The Man in the Arena by Theodore Roosevelt"
          caption="The Man in the Arena, Theodore Roosevelt"
        />

        <p>
          This current season of life feels like a season of rebuilding,
          gratitude, and faith. For a couple of years, I felt mentally stuck, and
          I'm learning again what it looks like to live the life God wants me to
          live: a life of faith, of stepping out, of trusting Him fully, and of
          believing that He cares for me and has good plans for me. I'm
          practicing gratitude more intentionally, rewiring my mind with better
          and more life-giving thoughts, and looking toward the future with hope.
        </p>

        <p>
          Running has become a big part of that season for me. Right now I'm
          training for a marathon, and I want to keep pushing further into
          endurance with goals like running a 50-miler and eventually a
          100-miler. More than anything, running keeps reminding me of something
          I've seen throughout my whole life: showing up matters. Staying
          consistent matters. Keep going, even when it's slow. Keep going, even
          when life feels heavy.
        </p>

        <PhotoSingle
          src={running1}
          alt="After finishing a 40.72 mile ultra marathon"
          caption="40.72 miles, 7 hours 51 minutes"
        />
        <p>
          I truly believe that if you keep showing up, eventually the tide will
          turn. Not always on your timeline, and not always in the way you
          expected, but God is faithful. He is always at work.
        </p>

        <PhotoSingle
          src={outdoors}
          alt="Somewhere outside"
          caption=""
        />
      </div>
    </div>
  );
}
