'use strict';

/**
 * language en|pt
 */

module.exports = options => {
	return `<?php

/**
 * ${options.name} CPT
 */
function ${options.slugUnderline}_registrer() {
	$labels = array(
		'name' => _x('${options.pluralName}', 'post type general name'),
		'singular_name' => _x('${options.name}', 'post type singular name'),
		'add_new' => _x('Adicionar ${options.name}', '${options.name}'),
		'add_new_item' => __('Adicionar ${options.name}'),
		'edit_item' => __('Editar ${options.name}'),
		'new_item' => __('Novo ${options.name}'),
		'view_item' => __('Ver ${options.name}'),
		'search_items' => __('Procurar ${options.name}'),
		'not_found' =>  __('Nada encontrado'),
		'not_found_in_trash' => __('Nada encontrado no lixo'),
		'parent_item_colon' => ''
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'publicly_queryable' => true,
		'show_ui' => true,
		'query_var' => true,
		'has_archive' => ${options.hasArchive},
		'menu_icon' => ${options.icon},
		'capability_type' => '${options.capabilityType}',
		'hierarchical' => false,
		'rewrite' => array('slug' => '${options.slug}'),
		'menu_position' => 6,
		'supports' => ${Array.isArray(options.supports) ? `array('${options.supports.join('\', \'')}')` : ''},
	);

	register_post_type('${options.slug}', $args);
	add_action('init', '${options.slugUnderline}_registrer');
}`;
};
