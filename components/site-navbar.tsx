"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type HeaderGroupKey = "product" | "solutions" | "resources";

type HeaderMenuItem = {
  label: string;
  href: string;
};

type HeaderMenuGroup = {
  key: HeaderGroupKey;
  label: string;
  items: HeaderMenuItem[];
};

const headerMenuGroups: HeaderMenuGroup[] = [
  {
    key: "product",
    label: "Product",
    items: [
      { label: "Events", href: "/product/events" },
      { label: "Content", href: "/product/content" },
      { label: "Conversations", href: "/product/conversations" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Custom AI", href: "/product/custom-ai" }
    ]
  },
  {
    key: "solutions",
    label: "Solutions",
    items: [
      { label: "Church", href: "/solutions/church" },
      { label: "Conferences", href: "/solutions/conferences" },
      { label: "Corporate Events", href: "/solutions/corporate-events" },
      { label: "Education", href: "/solutions/education" },
      { label: "Government", href: "/solutions/government" },
      {
        label: "Theater/Performing Arts",
        href: "/solutions/theater-performing-arts"
      }
    ]
  },
  {
    key: "resources",
    label: "Resources",
    items: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Training Center", href: "/resources/training-center" },
      { label: "Documentation", href: "/resources/documentation" },
      { label: "FAQ", href: "/resources/faq" }
    ]
  }
];

const topLevelLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" }
];

function trackHeaderEvent(
  eventName: "header_dropdown_open" | "header_dropdown_click",
  payload: Record<string, unknown>
) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = { event: eventName, ...payload };
  const withDataLayer = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  if (Array.isArray(withDataLayer.dataLayer)) {
    withDataLayer.dataLayer.push(eventPayload);
  }

  window.dispatchEvent(
    new CustomEvent("spf-analytics", {
      detail: eventPayload
    })
  );
}

export function SiteNavbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const triggerRefs = useRef<Record<HeaderGroupKey, HTMLButtonElement | null>>({
    product: null,
    solutions: null,
    resources: null
  });

  const itemRefs = useRef<
    Record<HeaderGroupKey, Array<HTMLAnchorElement | null>>
  >({
    product: [],
    solutions: [],
    resources: []
  });

  const [openDesktopMenu, setOpenDesktopMenu] = useState<HeaderGroupKey | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileGroups, setOpenMobileGroups] = useState<
    Record<HeaderGroupKey, boolean>
  >({
    product: false,
    solutions: false,
    resources: false
  });

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current) {
        return;
      }

      const target = event.target as Node;
      if (!navRef.current.contains(target)) {
        setOpenDesktopMenu(null);
      }
    }

    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  function focusMenuItem(groupKey: HeaderGroupKey, itemIndex: number) {
    const list = itemRefs.current[groupKey];
    const item = list[itemIndex];
    item?.focus();
  }

  function openDesktopDropdown(groupKey: HeaderGroupKey, focusIndex?: number) {
    setOpenDesktopMenu(groupKey);
    trackHeaderEvent("header_dropdown_open", {
      menu: groupKey,
      surface: "desktop"
    });

    if (focusIndex !== undefined) {
      window.requestAnimationFrame(() => {
        focusMenuItem(groupKey, focusIndex);
      });
    }
  }

  function closeDesktopDropdown(groupKey?: HeaderGroupKey) {
    setOpenDesktopMenu(null);
    if (groupKey) {
      triggerRefs.current[groupKey]?.focus();
    }
  }

  function onDesktopTriggerKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    group: HeaderMenuGroup
  ) {
    if (
      event.key === "ArrowDown" ||
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openDesktopDropdown(group.key, 0);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      openDesktopDropdown(group.key, group.items.length - 1);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeDesktopDropdown();
    }
  }

  function onDesktopMenuKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
    group: HeaderMenuGroup
  ) {
    const list = itemRefs.current[group.key];
    const activeElement = document.activeElement;
    const activeIndex = list.findIndex((item) => item === activeElement);

    if (event.key === "Escape") {
      event.preventDefault();
      closeDesktopDropdown(group.key);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex =
        activeIndex < 0 || activeIndex >= list.length - 1 ? 0 : activeIndex + 1;
      focusMenuItem(group.key, nextIndex);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = activeIndex <= 0 ? list.length - 1 : activeIndex - 1;
      focusMenuItem(group.key, prevIndex);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusMenuItem(group.key, 0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusMenuItem(group.key, list.length - 1);
    }
  }

  function onDropdownItemClick(groupKey: HeaderGroupKey, item: HeaderMenuItem) {
    trackHeaderEvent("header_dropdown_click", {
      menu: groupKey,
      destination: item.href,
      label: item.label
    });
    setOpenDesktopMenu(null);
    setIsMobileMenuOpen(false);
  }

  function toggleMobileGroup(groupKey: HeaderGroupKey) {
    setOpenMobileGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));

    trackHeaderEvent("header_dropdown_open", {
      menu: groupKey,
      surface: "mobile"
    });
  }

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-primary" aria-hidden />
          <span className="font-heading text-lg">spf.io</span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-2 md:flex"
          aria-label="Primary">
          {headerMenuGroups.map((group) => {
            const isOpen = openDesktopMenu === group.key;
            return (
              <div key={group.key} className="relative">
                <Button
                  variant="ghost"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  aria-controls={`desktop-menu-${group.key}`}
                  ref={(node) => {
                    triggerRefs.current[group.key] = node;
                  }}
                  onClick={() => {
                    if (isOpen) {
                      setOpenDesktopMenu(null);
                    } else {
                      openDesktopDropdown(group.key);
                    }
                  }}
                  onKeyDown={(event) => onDesktopTriggerKeyDown(event, group)}>
                  {group.label}
                  <ChevronDown className="size-4" aria-hidden />
                </Button>

                {isOpen ? (
                  <div
                    id={`desktop-menu-${group.key}`}
                    role="menu"
                    aria-label={`${group.label} menu`}
                    className="absolute left-0 top-10 z-50 min-w-64 rounded-xl border border-border/70 bg-popover p-2 shadow-lg"
                    onKeyDown={(event) => onDesktopMenuKeyDown(event, group)}>
                    {group.items.map((item, itemIndex) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-muted focus:bg-muted focus:outline-none"
                        ref={(node) => {
                          itemRefs.current[group.key][itemIndex] = node;
                        }}
                        onClick={() => onDropdownItemClick(group.key, item)}
                        onKeyDown={(event) => {
                          if (event.key === "Tab") {
                            setOpenDesktopMenu(null);
                          }
                        }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          {topLevelLinks.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              render={<Link href={item.href} />}>
              {item.label}
            </Button>
          ))}

          <label className="flex items-center gap-2 rounded-lg border border-border/70 bg-background px-2 py-1 text-sm text-muted-foreground">
            <Globe className="size-4" aria-hidden />
            <span className="sr-only">Site language</span>
            <select
              defaultValue="en"
              aria-label="Site language"
              className="bg-transparent text-foreground outline-none">
              <option value="en">EN</option>
            </select>
          </label>

          <Button size="lg" render={<Link href="/request-quote" />}>
            Request a Quote
          </Button>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-border/70 bg-background px-4 py-4 md:hidden">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col gap-2"
            aria-label="Mobile primary">
            {headerMenuGroups.map((group) => {
              const isGroupOpen = openMobileGroups[group.key];
              return (
                <div
                  key={group.key}
                  className="rounded-lg border border-border/70">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium"
                    aria-expanded={isGroupOpen}
                    aria-controls={`mobile-group-${group.key}`}
                    onClick={() => toggleMobileGroup(group.key)}>
                    {group.label}
                    <ChevronDown
                      className={`size-4 transition-transform ${
                        isGroupOpen ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden
                    />
                  </button>

                  {isGroupOpen ? (
                    <div
                      id={`mobile-group-${group.key}`}
                      role="region"
                      aria-label={`${group.label} links`}
                      className="border-t border-border/70 px-2 py-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-md px-2 py-2 text-sm hover:bg-muted"
                          onClick={() => onDropdownItemClick(group.key, item)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            {topLevelLinks.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="justify-start"
                render={<Link href={item.href} />}
                onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </Button>
            ))}

            <label className="mt-1 flex items-center gap-2 rounded-lg border border-border/70 bg-background px-3 py-2 text-sm text-muted-foreground">
              <Globe className="size-4" aria-hidden />
              <span className="sr-only">Site language</span>
              <select
                defaultValue="en"
                aria-label="Site language"
                className="w-full bg-transparent text-foreground outline-none">
                <option value="en">EN</option>
              </select>
            </label>

            <Button
              size="lg"
              render={<Link href="/request-quote" />}
              onClick={() => setIsMobileMenuOpen(false)}>
              Request a Quote
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
