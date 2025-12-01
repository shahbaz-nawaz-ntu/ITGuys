import React, { useState } from 'react';

// Imports: every image from the Gallery images folder
import Img001 from '../../assets/images/Gallery images/gallery-001.jpeg';
import Img002 from '../../assets/images/Gallery images/gallery-002.jpeg';
import Img003 from '../../assets/images/Gallery images/gallery-003.jpeg';
import Img004 from '../../assets/images/Gallery images/gallery-004.jpeg';
import Img005 from '../../assets/images/Gallery images/gallery-005.jpeg';
import Img006 from '../../assets/images/Gallery images/gallery-006.jpeg';
import Img007 from '../../assets/images/Gallery images/gallery-007.jpeg';
import Img008 from '../../assets/images/Gallery images/gallery-008.jpeg';
import Img009 from '../../assets/images/Gallery images/gallery-009.jpeg';
import Img010 from '../../assets/images/Gallery images/gallery-010.jpeg';
import Img011 from '../../assets/images/Gallery images/gallery-011.jpeg';
import Img012 from '../../assets/images/Gallery images/gallery-012.jpeg';
import Img013 from '../../assets/images/Gallery images/gallery-013.jpeg';
import Img014 from '../../assets/images/Gallery images/gallery-014.jpeg';
import Img015 from '../../assets/images/Gallery images/gallery-015.jpeg';
import Img016 from '../../assets/images/Gallery images/gallery-016.jpeg';
import Img017 from '../../assets/images/Gallery images/gallery-017.jpeg';
import Img018 from '../../assets/images/Gallery images/gallery-018.jpeg';
import Img019 from '../../assets/images/Gallery images/gallery-019.jpeg';
import Img020 from '../../assets/images/Gallery images/gallery-020.jpeg';
import Img021 from '../../assets/images/Gallery images/gallery-021.jpeg';
import Img022 from '../../assets/images/Gallery images/gallery-022.jpeg';
import Img023 from '../../assets/images/Gallery images/gallery-023.jpeg';
import Img024 from '../../assets/images/Gallery images/gallery-024.jpeg';
import Img025 from '../../assets/images/Gallery images/gallery-025.jpeg';
import Img026 from '../../assets/images/Gallery images/gallery-026.jpeg';
import Img027 from '../../assets/images/Gallery images/gallery-027.jpeg';
import Img028 from '../../assets/images/Gallery images/gallery-028.jpeg';
import Img029 from '../../assets/images/Gallery images/gallery-029.jpeg';
import Img030 from '../../assets/images/Gallery images/gallery-030.jpeg';
import Img031 from '../../assets/images/Gallery images/gallery-031.jpeg';
import Img032 from '../../assets/images/Gallery images/gallery-032.jpeg';
import Img033 from '../../assets/images/Gallery images/gallery-033.jpeg';
import Img034 from '../../assets/images/Gallery images/gallery-034.jpeg';
import Img035 from '../../assets/images/Gallery images/gallery-035.jpeg';
import Img036 from '../../assets/images/Gallery images/gallery-036.jpeg';
import Img037 from '../../assets/images/Gallery images/gallery-037.jpeg';
import Img038 from '../../assets/images/Gallery images/gallery-038.jpeg';
import Img039 from '../../assets/images/Gallery images/gallery-039.jpeg';
import Img040 from '../../assets/images/Gallery images/gallery-040.jpeg';
import Img041 from '../../assets/images/Gallery images/gallery-041.jpeg';
import Img042 from '../../assets/images/Gallery images/gallery-042.jpeg';
import Img043 from '../../assets/images/Gallery images/gallery-043.jpeg';
import Img044 from '../../assets/images/Gallery images/gallery-044.jpeg';
import Img045 from '../../assets/images/Gallery images/gallery-045.jpeg';
import Img046 from '../../assets/images/Gallery images/gallery-046.jpeg';
import Img047 from '../../assets/images/Gallery images/gallery-047.jpeg';
import Img048 from '../../assets/images/Gallery images/gallery-048.jpeg';
import Img049 from '../../assets/images/Gallery images/gallery-049.jpeg';
import Img050 from '../../assets/images/Gallery images/gallery-050.jpeg';
import Img051 from '../../assets/images/Gallery images/gallery-051.jpeg';
import Img052 from '../../assets/images/Gallery images/gallery-052.jpeg';
import Img053 from '../../assets/images/Gallery images/gallery-053.jpeg';
import Img054 from '../../assets/images/Gallery images/gallery-054.jpeg';
import Img055 from '../../assets/images/Gallery images/gallery-055.jpeg';
import Img056 from '../../assets/images/Gallery images/gallery-056.jpeg';
import Img057 from '../../assets/images/Gallery images/gallery-057.jpeg';
import Img058 from '../../assets/images/Gallery images/gallery-058.jpeg';
import Img059 from '../../assets/images/Gallery images/gallery-059.jpeg';
import Img060 from '../../assets/images/Gallery images/gallery-060.jpeg';

function GallerySection() {
    // CONFIGURATION: How many images to show initially (two rows)
    const INITIAL_LIMIT = 6;
    // How many rows to add each time the user clicks "Show More".
    // With the current grid (3 columns on large screens) 2 rows = 6 images.
    const ROWS_TO_ADD = 2;
    const STEP = INITIAL_LIMIT; // amount to increase visible count each click

    // State: how many images are currently visible
    const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

    // Full list of gallery images (imported above)
    const projects = [
        { id: 1, image: Img001, title: 'Gallery Image 1' },
        { id: 2, image: Img002, title: 'Gallery Image 2' },
        { id: 3, image: Img003, title: 'Gallery Image 3' },
        { id: 4, image: Img004, title: 'Gallery Image 4' },
        { id: 5, image: Img005, title: 'Gallery Image 5' },
        { id: 6, image: Img006, title: 'Gallery Image 6' },
        { id: 7, image: Img007, title: 'Gallery Image 7' },
        { id: 8, image: Img008, title: 'Gallery Image 8' },
        { id: 9, image: Img009, title: 'Gallery Image 9' },
        { id: 10, image: Img010, title: 'Gallery Image 10' },
        { id: 11, image: Img011, title: 'Gallery Image 11' },
        { id: 12, image: Img012, title: 'Gallery Image 12' },
        { id: 13, image: Img013, title: 'Gallery Image 13' },
        { id: 14, image: Img014, title: 'Gallery Image 14' },
        { id: 15, image: Img015, title: 'Gallery Image 15' },
        { id: 16, image: Img016, title: 'Gallery Image 16' },
        { id: 17, image: Img017, title: 'Gallery Image 17' },
        { id: 18, image: Img018, title: 'Gallery Image 18' },
        { id: 19, image: Img019, title: 'Gallery Image 19' },
        { id: 20, image: Img020, title: 'Gallery Image 20' },
        { id: 21, image: Img021, title: 'Gallery Image 21' },
        { id: 22, image: Img022, title: 'Gallery Image 22' },
        { id: 23, image: Img023, title: 'Gallery Image 23' },
        { id: 24, image: Img024, title: 'Gallery Image 24' },
        { id: 25, image: Img025, title: 'Gallery Image 25' },
        { id: 26, image: Img026, title: 'Gallery Image 26' },
        { id: 27, image: Img027, title: 'Gallery Image 27' },
        { id: 28, image: Img028, title: 'Gallery Image 28' },
        { id: 29, image: Img029, title: 'Gallery Image 29' },
        { id: 30, image: Img030, title: 'Gallery Image 30' },
        { id: 31, image: Img031, title: 'Gallery Image 31' },
        { id: 32, image: Img032, title: 'Gallery Image 32' },
        { id: 33, image: Img033, title: 'Gallery Image 33' },
        { id: 34, image: Img034, title: 'Gallery Image 34' },
        { id: 35, image: Img035, title: 'Gallery Image 35' },
        { id: 36, image: Img036, title: 'Gallery Image 36' },
        { id: 37, image: Img037, title: 'Gallery Image 37' },
        { id: 38, image: Img038, title: 'Gallery Image 38' },
        { id: 39, image: Img039, title: 'Gallery Image 39' },
        { id: 40, image: Img040, title: 'Gallery Image 40' },
        { id: 41, image: Img041, title: 'Gallery Image 41' },
        { id: 42, image: Img042, title: 'Gallery Image 42' },
        { id: 43, image: Img043, title: 'Gallery Image 43' },
        { id: 44, image: Img044, title: 'Gallery Image 44' },
        { id: 45, image: Img045, title: 'Gallery Image 45' },
        { id: 46, image: Img046, title: 'Gallery Image 46' },
        { id: 47, image: Img047, title: 'Gallery Image 47' },
        { id: 48, image: Img048, title: 'Gallery Image 48' },
        { id: 49, image: Img049, title: 'Gallery Image 49' },
        { id: 50, image: Img050, title: 'Gallery Image 50' },
        { id: 51, image: Img051, title: 'Gallery Image 51' },
        { id: 52, image: Img052, title: 'Gallery Image 52' },
        { id: 53, image: Img053, title: 'Gallery Image 53' },
        { id: 54, image: Img054, title: 'Gallery Image 54' },
        { id: 55, image: Img055, title: 'Gallery Image 55' },
        { id: 56, image: Img056, title: 'Gallery Image 56' },
        { id: 57, image: Img057, title: 'Gallery Image 57' },
        { id: 58, image: Img058, title: 'Gallery Image 58' },
        { id: 59, image: Img059, title: 'Gallery Image 59' },
        { id: 60, image: Img060, title: 'Gallery Image 60' }
    ];

    // Shuffle the projects once on component mount so each page load shows a random order.
    // We use the lazy initializer for useState so shuffling happens only once per mount.
    const [shuffledProjects] = useState(() => {
        const copy = [...projects];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    });

    // Logic to decide which images to display (progressive reveal) from the shuffled list
    const visibleProjects = (shuffledProjects || projects).slice(0, visibleCount);

    return (
        <section className="py-5" id="gallery">
            <div className="container">

                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold mb-2">Our recent work/ Gallery</h2>
                    <p className="text-muted">
                        Snapshots from our latest projects across Dubai and Sharjah.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="row g-4">
                    {visibleProjects.map((item) => (
                        <div className="col-12 col-md-6 col-lg-4" key={item.id}>

                            <div
                                className="position-relative overflow-hidden rounded shadow-sm bg-white"
                                style={{ height: "250px", cursor: "pointer" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-100 h-100 gallery-img"
                                    style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                                />

                                {/* Overlay Text */}
                                {/* <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-white p-2 text-center">
                                    <small className="fw-bold">{item.title}</small>
                                </div> */}
                            </div>

                        </div>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                {/* Only show this button if there are more images than the initial limit */}
                {projects.length > INITIAL_LIMIT && (

                    <div className="text-center mt-5">
                        <div
                            className="btn-box animate-4"
                            onClick={() => {
                                if (visibleCount >= projects.length) {
                                    // collapse back to initial view
                                    setVisibleCount(INITIAL_LIMIT);
                                } else {
                                    // show more images (step by STEP), capped to total
                                    setVisibleCount((c) => Math.min(c + STEP, projects.length));
                                }
                            }}
                        >
                            <a className="theme-btn btn-style-one">
                                <span className="btn-title">{visibleCount >= projects.length ? 'Show Less' : 'Show More Work'}</span>
                            </a>
                        </div>
                        {/* <button 
              className="btn btn-primary px-5 py-2 rounded-pill shadow-sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More Work"}
            </button> */}
                    </div>
                )}

            </div>

            {/* Internal CSS for the Hover Zoom Effect */}
            <style>{`
        .gallery-img:hover {
          transform: scale(1.1);
        }
      `}</style>

        </section>
    );
}

export default GallerySection;