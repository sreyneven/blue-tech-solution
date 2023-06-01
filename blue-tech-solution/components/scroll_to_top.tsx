import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  return (
    <div className="fixed bottom-32 right-0">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${isVisible ? 'opacity-100' : 'opacity-0'} rotate-[270deg] text-[#262856] font-[600] font-inter lg:text-[1rem] text-[0.7rem] cursor-pointer` }
      >
        ----- scroll to top
      </button>
    </div>
  )
}