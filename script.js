// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Get modal element
const modal = document.getElementById('memberModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const cards = document.querySelectorAll('.team-card');

// Function to open modal with member data
function openModal(memberData) {
    // Populate modal with data
    document.getElementById('modal-name').textContent = memberData.name;
    document.getElementById('modal-role').textContent = memberData.role;
    document.getElementById('modal-description').textContent = memberData.description;
    document.getElementById('modal-email').textContent = memberData.email;
    document.getElementById('modal-id').textContent = memberData.id || 'N/A';
    document.getElementById('modal-location').textContent = memberData.location;
    document.getElementById('modal-experience').textContent = memberData.experience;
    document.getElementById('modal-education').textContent = memberData.education;
    document.getElementById('modal-skills').textContent = memberData.skills;
    
    // Set social links
    document.getElementById('modal-facebook').href = memberData.facebook;
    document.getElementById('modal-twitter').href = memberData.twitter;
    document.getElementById('modal-linkedin').href = memberData.linkedin;
    
    // Handle avatar photo
    const modalAvatarImg = document.getElementById('modal-avatar-img');
    const modalAvatarIcon = document.getElementById('modal-avatar-icon');
    
    if (memberData.photo && memberData.photo !== '') {
        modalAvatarImg.src = memberData.photo;
        modalAvatarImg.alt = memberData.name;
        modalAvatarImg.classList.add('active');
        modalAvatarIcon.classList.add('hidden');
    } else {
        modalAvatarImg.classList.remove('active');
        modalAvatarIcon.classList.remove('hidden');
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Add click event to each team card
cards.forEach(card => {
    card.addEventListener('click', function() {
        const memberData = {
            name: this.dataset.name,
            role: this.dataset.role,
            description: this.dataset.description,
            email: this.dataset.email,
            id: this.dataset.id,
            photo: this.dataset.photo,
            location: this.dataset.location,
            experience: this.dataset.experience,
            education: this.dataset.education,
            skills: this.dataset.skills,
            facebook: this.dataset.facebook,
            twitter: this.dataset.twitter,
            linkedin: this.dataset.linkedin
        };
        
        openModal(memberData);
    });
    
    // Add hover effect
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

// Close modal on overlay click
modalOverlay.addEventListener('click', closeModal);

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent clicks inside modal content from closing the modal
document.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Add click event to social icons (prevent default if href is "#")
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            e.stopPropagation(); // Prevent card click
            console.log('Social icon clicked');
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all team cards
cards.forEach(card => {
    observer.observe(card);
});

// Dynamic greeting based on time of day
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const subtitle = document.querySelector('.header-subtitle');
    
    if (subtitle && subtitle.textContent === 'Những con người tài năng đằng sau thành công') {
        // Keep the default message, but you can customize based on time
        if (hour < 12) {
            // Morning - keep default or customize
        } else if (hour < 18) {
            // Afternoon - keep default or customize
        } else {
            // Evening - keep default or customize
        }
    }
}

// Call on page load
updateGreeting();

// Add parallax effect to header on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
        header.style.opacity = 1 - (scrolled / 500);
    }
});

// Add ripple effect on card click
cards.forEach(card => {
    const originalClickHandler = card.onclick;
    
    card.addEventListener('mousedown', function(e) {
        // Don't add ripple if clicking on social icons
        if (e.target.closest('.social-icon')) {
            return;
        }
        
        const ripple = document.createElement('div');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .team-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('Team member page loaded successfully! 🎉');
console.log('Click on any team member card to view detailed information.');
